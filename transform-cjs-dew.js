const { parse } = require('@babel/parser');
const stage3Syntax = ['asyncGenerators', 'classProperties', 'optionalCatchBinding', 'objectRestSpread', 'numericSeparator', 'dynamicImport', 'importMeta'];

module.exports = function ({ types: t }) {
  const exportsIdentifier = t.identifier('exports');
  exportsIdentifier.own = true;
  const moduleIdentifier = t.identifier('module');
  const dewIdentifier = t.identifier('dew');

  const selfIdentifier = t.identifier('self');
  const ifSelfPredicate = t.binaryExpression('!==', t.unaryExpression('typeof', selfIdentifier), t.stringLiteral('undefined'));
  const requireSub = (dep) => {
    if (dep === undefined)
      return t.nullLiteral();
    if (dep === null)
      return t.objectExpression([]);
    return dep.dew ? t.callExpression(dep.id, []) : dep.id;
  };
  const moduleDeclarator = t.variableDeclaration('var', [
    t.variableDeclarator(moduleIdentifier, t.objectExpression([
      t.objectProperty(exportsIdentifier, exportsIdentifier)
    ]))
  ]);

  // we detect optional require based on pattern matching:
  // try { const x = require('x') } catch (e) {/*empty*/}
  function isOptionalRequire (path) {
    const secondParent = path.parentPath && path.parentPath.parentPath;
    const fourthParent = secondParent.parentPath && secondParent.parentPath.parentPath;
    return secondParent && fourthParent && (t.isVariableDeclarator(secondParent.node) || t.isExpressionStatement(secondParent.node)) && t.isTryStatement(fourthParent.node) && fourthParent.node.handler.body.body.length === 0;
  }

  const cjsScopeVars = ['require', 'module', 'exports', '__filename', '__dirname'];

  // given a string literal expression
  // partially resolve the leading part if a string literal
  function partialResolve (expr, resolve, isRequireResolve) {
    if (t.isStringLiteral(expr)) {
      return t.stringLiteral(resolve(expr.value, isRequireResolve));
    }
    else if (t.isTemplateLiteral(expr)) {
      let partialResolve = resolve(expr.quasis[0].value.cooked, isRequireResolve);
      expr.quasis[0] = t.templateElement({
        raw: partialResolve
      });
      return expr;
    }
    else if (t.isBinaryExpression(expr) && expr.operator === '+' && t.isStringLiteral(expr.left)) {
      expr.left.value = resolve(expr.left.value, isRequireResolve);
    }
    return expr;
  }

  function resolvePartialWildcardString (node, lastIsWildcard, exprs) {
    if (t.isStringLiteral(node))
      return node.value;
    
    if (t.isTemplateLiteral(node)) {
      let str = '';
      for (let i = 0; i < node.quasis.length; i++) {
        const quasiStr = node.quasis[i].value.cooked;
        if (quasiStr.length) {
          str += quasiStr;
          lastIsWildcard = false;
        }
        const nextNode = node.expressions[i];
        if (nextNode) {
          const nextStr = resolvePartialWildcardString(nextNode, lastIsWildcard, exprs);
          if (nextStr.length) {
            lastIsWildcard = nextStr.endsWith('*');
            str += nextStr;
          }
        }
      }
      return str;
    }

    if (t.isBinaryExpression(node) && node.operator === '+') {
      const leftResolved = resolvePartialWildcardString(node.left, lastIsWildcard, exprs);
      if (leftResolved.length)
        lastIsWildcard = leftResolved.endsWith('*');
      const rightResolved = resolvePartialWildcardString(node.right, lastIsWildcard, exprs);
      return leftResolved + rightResolved;
    }

    if (t.isIdentifier(node, { name: '__dirname' })) {
      return '.';
    }
    
    exprs.push(node);
    return lastIsWildcard ? '' : '*';
  }

  function addDependency (path, state, depModuleArg) {
    const exprs = [];
    let depModule = resolvePartialWildcardString(depModuleArg, false, exprs);

    // no support for fully dynamic require
    if (depModule === '*')
      return requireSub(undefined);

    let depResolved;

    if (depModule.indexOf('*') !== -1) {
      depResolved = state.opts.resolveWildcard ? state.opts.resolveWildcard(depModule) : null;

      if (!depResolved)
        return requireSub(undefined);

      if (depResolved instanceof Array) {
        // add each module as a dependency (still using resolver)
        const depExprs = depResolved.map(m => addDependency(path, state, t.stringLiteral(state.opts.resolve ? state.opts.resolve(m, false) || m : m)));

        const exprIds = exprs.map((_expr, i) => t.Identifier('e' + (i === 0 ? '' : i + 1)));

        const regEx = new RegExp(depModule.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '(.*)'));
        const matchExprs = depResolved.map(resolved => {
          const match = resolved.match(regEx);
          return exprs.map((_expr, i) => t.binaryExpression('===', exprIds[i], t.stringLiteral(match[i + 1]))).reduce((reduction, next) => {
            if (reduction)
              return t.logicalExpression('&&', reduction, next);
            return next;
          }, null);
        });

        const matchExpression = matchExprs.reverse().reduce((reduction, next, i) => {
          return t.conditionalExpression(next, depExprs[matchExprs.length - i - 1], reduction);
        }, t.nullLiteral());
        
        return t.callExpression(t.functionExpression(null, exprIds, t.blockStatement([t.returnStatement(matchExpression)])), exprs);
      }

      depModule = depResolved;
    }
    
    depResolved = state.opts.resolve ? state.opts.resolve(depModule, false) : depModule;

    let depName = path.scope.getProgramParent().generateUidIdentifier(depModule).name;

    // apply resolver
    
    if (depResolved === null) {
      return requireSub(null);
    }
    else {
      depModule = depResolved || depModule;
      for (let dep of state.deps) {
        if (dep.literal.value === depModule)
          return requireSub(dep);
      }
      let dew = true;
      if (state.opts.esmDependencies && state.opts.esmDependencies(depModule))
        dew = false;
      const dep = {
        literal: t.stringLiteral(depModule),
        id: t.identifier(depName + (dew ? 'Dew' : '')),
        dew
      };
      state.deps.push(dep)
      return requireSub(dep);
    }
  }

  function dce (path) {
    let parentNode = path.parentPath.node;

    // inline direct string equalities as "true" or "false"
    if (t.isBinaryExpression(parentNode)) {
      if (parentNode.operator === '===' || parentNode.operator === '==') {
        if (t.isStringLiteral(parentNode.left) && t.isStringLiteral(parentNode.right)) {
          path.parentPath.replaceWith(t.booleanLiteral(parentNode.left.value === parentNode.right.value));
          dce(path.parentPath);
        }
      }
      if (parentNode.operator === '!==' || parentNode.operator === '!=') {
        if (t.isStringLiteral(parentNode.left) && t.isStringLiteral(parentNode.right)) {
          path.parentPath.replaceWith(t.booleanLiteral(parentNode.left.value !== parentNode.right.value));
          dce(path.parentPath);
        }
      }
    }
    // bubble up "true" and "false" through logical expressions where possible
    if (t.isLogicalExpression(parentNode)) {
      if (parentNode.operator === '&&') {
        if (t.isBooleanLiteral(parentNode.left)) {
          // true && X -> X
          if (parentNode.left.value) {
            path.parentPath.replaceWith(parentNode.right);
            dce(path.parentPath);
          }
          // false && X -> false
          else {
            path.parentPath.replaceWith(t.booleanLiteral(false));
            dce(path.parentPath);
          }
        }
        // null && X -> null
        else if (t.isNullLiteral(parentNode.left)) {
          path.parentPath.replaceWith(t.nullLiteral());
          dce(path.parentPath);
        }
      }
      else if (parentNode.operator === '||') {
        // false || null || X -> X
        if (t.isBooleanLiteral(parentNode.left) && !parentNode.left.value || t.isNullLiteral(parentNode.left)) {
          path.parentPath.replaceWith(parentNode.right);
          dce(path.parentPath);
        }
        // true || X -> true
        else if (t.isBooleanLiteral(parentNode.left) && parentNode.left.value) {
          path.parentPath.replaceWith(t.booleanLiteral(true));
          dce(path.parentPath);
        }
      }
    }
    // if we have a direct boolean in an IfStatement, remove the falsy branch
    else if (t.isIfStatement(parentNode) && path.node === parentNode.test && t.isBooleanLiteral(parentNode.test)) {
      let consequent = path.parentPath.get('consequent');
      let alternate = path.parentPath.get('alternate');

      path.stop();

      if (parentNode.test.value) {
        if (alternate.node)
          alternate.remove();
        path.parentPath.replaceWith(consequent);
      }
      else {
        consequent.remove();
        if (alternate.node)
          path.parentPath.replaceWith(alternate);
        else
          path.parentPath.remove();
      }
    }
    // if we have a direct boolean in a ConditionalExpression, inline the truthy branch
    else if (t.isConditionalExpression(parentNode) && path.node === parentNode.test && t.isBooleanLiteral(parentNode.test)) {
      let consequent = path.parentPath.get('consequent');
      let alternate = path.parentPath.get('alternate');

      path.stop();

      if (parentNode.test.value)
        path.parentPath.replaceWith(consequent);
      else
        path.parentPath.replaceWith(alternate);
    }
  }

  let thisOrGlobal;
  let filenameReplace;
  let dirnameReplace;

  return {
    visitor: {
      Program: {
        enter (path, state) {
          if (path.hub.file.shebang)
            path.hub.file.shebang = '';

          path.node.directives.forEach((d, index) => {
            if (d.value && d.value.value === 'use strict') {
              state.isStrict = true;
              path.node.directives.splice(index, 1);
            }
          });

          if (state.opts.filename) {
            filenameReplace = parse('(' + state.opts.filename + ')', { sourceType: 'module', plugins: stage3Syntax }).program.body[0].expression;
          }
          if (state.opts.dirname) {
            dirnameReplace = parse('(' + state.opts.dirname + ')', { sourceType: 'module', plugins: stage3Syntax }).program.body[0].expression;
          }

          state.define = {};
          if (state.opts.define)
            Object.keys(state.opts.define).forEach(defineName => {
              let parts = defineName.split('.');
              if (parts.length === 1) {
                state.define[defineName] = state.opts.define[defineName];
                return;
              }
              let part = parts.shift();
              let curDefineObj = state.define[part] = {
                defineName: undefined,
                defineProperty: undefined
              };
              while (part = parts.shift()) {
                curDefineObj.defineName = part;

                if (parts.length)
                  curDefineObj = curDefineObj.defineProperty = {
                    defineName: undefined,
                    defineProperty: undefined
                  };
              }

              let defineSource = state.opts.define[defineName];
              if (defineSource === defineName)
                throw new Error('Defining into own name for ' + defineName + ' not permitted. Use quotes to define strings.');
              curDefineObj.defineProperty = state.opts.define[defineName];
            });

          state.deps = [];
          state.functionDepth = 0;
          state.strictGlobalTypeofPaths = {};
          state.globalIdentifier = path.scope.generateUidIdentifier('global');
          state.usesGlobal = false;
          state.redefinesSelfOrGlobal = false;
          state.usesModule = false;
          state.usesDynamicRequire = false;
          state.moduleDotExports = [];
          state.inserting = false;
        },
        exit (path, state) {
          state.functionDepth = -1;

          /*
           * Replace module.exports with exports if module not used
           */
          if (!state.usesModule) {
            state.moduleDotExports.forEach(moduleDotExport => {
              moduleDotExport.replaceWith(exportsIdentifier);
            });
          }

          /*
           * Add process and Buffer imports
           */
          if (state.hasProcess) {
            let dep = addDependency(path, state, t.stringLiteral('process'));
            path.unshiftContainer('body', t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier('process'), dep)
            ]));
          }

          if (state.hasBuffer) {
            let dep = addDependency(path, state, t.stringLiteral('buffer'));
            path.unshiftContainer('body', t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier('Buffer'), t.memberExpression(dep, t.identifier('Buffer')))
            ]));
          }

          /*
           * Construct the full body wrapper
           */
          let dewBodyWrapper = [];

          state.deps.forEach(dep => {
            dewBodyWrapper.push(
              t.importDeclaration([
                dep.dew ? t.importSpecifier(dep.id, dewIdentifier) : t.importDefaultSpecifier(dep.id)
              ], dep.literal)
            );
          });

          const execIdentifier = path.scope.generateUidIdentifier('dewExec');

          dewBodyWrapper.push(t.variableDeclaration('var', [
            t.variableDeclarator(exportsIdentifier, t.objectExpression([])),
            t.variableDeclarator(execIdentifier, t.booleanLiteral(false))
          ]));

          let exportsReturn;
          if (state.usesModule) {
            dewBodyWrapper.push(moduleDeclarator);
            exportsReturn = t.returnStatement(t.memberExpression(moduleIdentifier, exportsIdentifier));
          }
          else {
            exportsReturn = t.returnStatement(exportsIdentifier);
          }

          if (state.usesGlobal)
            dewBodyWrapper.push(
              t.variableDeclaration('var', [t.variableDeclarator(state.globalIdentifier,
                t.conditionalExpression(ifSelfPredicate, selfIdentifier, t.identifier('global')))
              ]));

          dewBodyWrapper.push(
            t.exportNamedDeclaration(
              t.functionDeclaration(dewIdentifier, [], t.blockStatement([
                t.ifStatement(execIdentifier, exportsReturn),
                t.expressionStatement(t.assignmentExpression('=', execIdentifier, t.booleanLiteral(true))),
                ...path.node.body,
                exportsReturn
              ])),
              []
            )
          );

          for (const childPath of path.get('body')) {
            childPath.remove();
          }

          state.inserting = true;
          
          // path to ensure bindings are created for exports and __dew__
          // tracking at https://github.com/babel/babel/issues/8358
          for (let i = 0; i < dewBodyWrapper.length; i++) {
            const [newPath] = path.pushContainer('body', dewBodyWrapper[i]);
            if (t.isVariableDeclaration(newPath)) {
              for (const decl of newPath.get('declarations')) {
                path.scope.registerBinding(decl.node.id.name, decl.get('id'));
              }
            }
          }
        }
      },

      /*
       * Define plugin
       * Detect unsupported require lookups
       */
      MemberExpression (path, state) {
        if (state.inserting)
          return;
        if (t.isIdentifier(path.node.object, { name: 'require' }) && !path.scope.hasBinding('require')) {
          let name = path.node.computed ? path.node.property.value : path.node.property.name;
          if (name)
          switch (name) {
            case 'resolve':
              if (t.isCallExpression(path.parent) && path.parent.callee === path.node &&
                  path.parent.arguments.length === 1 && state.opts.resolve) {
                let resolveArgPath = path.parentPath.get('arguments.0');
                path.parentPath.replaceWith(partialResolve(resolveArgPath.node, state.opts.resolve, true));
              }
            break;
            case 'main':
              path.replaceWith(t.identifier('undefined'));
            break;
            case 'extensions':
            case 'cache':
              path.replaceWith(t.objectExpression([]));
            break;
          }
        }
      },

      Scope: {
        enter (path, state) {
          if (t.isFunction(path.scope.block))
            state.functionDepth++;
        },
        exit (path, state) {
          if (t.isFunction(path.scope.block))
            state.functionDepth--;
        }
      },

      /*
       * process / Buffer become imports
       * global renames to global alias
       * detect usage of module
       */
      ReferencedIdentifier (path, state) {
        if (state.inserting)
          return;
        let identifierName = path.node.name;

        // either a member "x" about to be referenced more deeply
        // ot a direct identifier "y"
        if (state.define.hasOwnProperty(identifierName)) {
          let definePath = path;
          let definedIdentifier = state.define[identifierName];
          while (typeof definedIdentifier !== 'string') {
            let parent = definePath.parentPath.node;
            if (!t.isMemberExpression(parent) || parent.object !== definePath.node ||
                !t.isIdentifier(parent.property, { name: definedIdentifier.defineName })) {
              definePath = undefined;
              break;
            }
            definePath = definePath.parentPath;
            definedIdentifier = definedIdentifier.defineProperty;
          }
          if (definePath &&
              !(t.isAssignmentExpression(definePath.parentPath) && definePath.parentPath.node.left === definePath.node)) {
            definePath.replaceWithSourceString(definedIdentifier);
            dce(definePath);
            return;
          }
        }

        /*
         * Require support
         */
        if (identifierName === 'require' && !path.scope.hasBinding('require')) {
          let parentPath = path.parentPath;
          if (t.isCallExpression(parentPath) && parentPath.node.callee === path.node) {
            if (!isOptionalRequire(parentPath))
              parentPath.replaceWith(addDependency(path, state, parentPath.node.arguments[0]));
          }
          else {
            // dynamic require -> null literal
            path.replaceWith(t.nullLiteral());
            dce(path);
          }
        }
        else if (!state.hasProcess && identifierName === 'process' && !path.scope.hasBinding('process')) {
          state.hasProcess = true;
        }
        else if (!state.hasBuffer && identifierName === 'Buffer' && !path.scope.hasBinding('Buffer')) {
          state.hasBuffer = true;
        }
        else if (identifierName === 'module' && !path.scope.hasBinding('module')) {
          let parentPath = path.parentPath;
          let parentNode = parentPath.node;
          if (t.isMemberExpression(parentNode) && parentNode.object === path.node) {
            let name = parentNode.computed ? parentNode.property.value : parentNode.property.name;
            if (name)
            switch (name) {
              case 'id':
              case 'filename':
                if (state.opts.filename)
                  parentPath.replaceWith(filenameReplace);
              break;
              case 'parent':
                parentPath.replaceWith(t.identifier('undefined'));
              break;
              case 'loaded':
              break;
              case 'children':
                parentPath.replaceWith(t.objectExpression([]));
              break;
              case 'paths':
                parentPath.replaceWith(t.objectExpression([]));
              break;
              // require alternative
              case 'require':
                if (t.isCallExpression(parentPath.parent) && parentPath.parent.callee === parentPath.node) {
                  if (!isOptionalRequire(parentPath))
                    parentPath.parentPath.replaceWith(addDependency(parentPath, state, parentPath.parent.arguments[0]));
                }
                else {
                  state.usesDynamicRequire = true;
                }
              break;
              case 'exports':
                if (!path.scope.hasBinding('exports')) {
                  state.moduleDotExports.push(parentPath);
                  break;
                }
              default:
                // need module
                state.usesModule = true;
            }
            return;
          }
          else if (t.isLogicalExpression(parentNode) && parentNode.left === path.node && parentNode.operator === '&&') {
            path.replaceWith(t.booleanLiteral(true));
          }
          else {
            state.usesModule = true;
          }
        }

        if (identifierName === '__filename' && state.opts.filename && !path.scope.hasBinding('__filename')) {
          path.replaceWith(filenameReplace);
        }
        else if (identifierName === '__dirname' && state.opts.dirname && !path.scope.hasBinding('__dirname')) {
          path.replaceWith(dirnameReplace);
        }
        else if (identifierName === 'global' && !path.scope.hasBinding('global')) {
          state.usesGlobal = true;
          path.replaceWith(state.globalIdentifier);
        }
      },

      /*
       * Top-level return must be falsy
       */
      ReturnStatement (path, state) {
        if (state.inserting)
          return;
        if (state.functionDepth === 0 && path.node.argument) {
          if (t.isLogicalExpression(path.node.argument) && t.isIdentifier(path.node.argument.right, { name: 'undefined' }))
            return;
          path.get('argument').replaceWith(t.logicalExpression('&&', path.node.argument, t.identifier('undefined')));
        }
      },

      /*
       * Detect top-level scope redefine of "self", "global" or "module"
       */
      VariableDeclarator (path, state) {
        if (state.functionDepth === 0) {
          if (path.node.id.name === 'self' || path.node.id.name === 'global' || path.node.id.name === 'GLOBAL')
            state.redefinesSelfOrGlobal = true;
        }
      },

      /*
       * top-level this.X -> exports.X
       */
      ThisExpression (path, state) {
        if (state.inserting)
          return;
        if (state.functionDepth === 0) {
          path.replaceWith(exportsIdentifier);
        }
        else if (!state.isStrict) {
          state.usesGlobal = true;
          const parentPath = path.parentPath;
          const directCall = t.isMemberExpression(parentPath.node) && parentPath.node.object === path.node
              && t.isCallExpression(parentPath.parentPath.node) && parentPath.parentPath.node.callee === parentPath.node;
          if (!directCall) {
            thisOrGlobal = thisOrGlobal || t.logicalExpression('||', t.thisExpression(), state.globalIdentifier);
            if (parentPath.node !== thisOrGlobal)
              path.replaceWith(thisOrGlobal);
          }
        }
      },

      /*
       * Unbound global handling
       */
      AssignmentExpression (path, state) {
        if (state.inserting)
          return;
        if (t.isIdentifier(path.node.left)) {
          let identifierName = path.node.left.name;

          /*
           * Catch "self" or "global" redefinitions
           */
          if (identifierName === 'self' || identifierName === 'global' || identifierName === 'GLOBAL') {
            if (!path.scope.hasBinding(identifierName))
              state.redefinesSelfOrGlobal = true;
          }

          /*
           * Strict conversion (should really be extended to all assignment forms: destructuring, update expression, iterator assignment)
           * p = 5; where p is unbound -> p added to top scope
           */
          if (!state.isStrict && !path.scope.hasBinding(identifierName) && cjsScopeVars.indexOf(identifierName) === -1) {
            state.usesGlobal = true;
            // the (heuristic) assumption here is that blind non-strict global assignments have only
            // the usage of typeof x before that global assignment is made, eg a good case:
            //   `typeof x === 'undefined' && x = 5` -> `typeof _global.x === 'undefined' && x = _global.x = 5`
            // while we have for example a bad case:
            //   `x && x = 10 && typeof x === 'undefined'` -> `x && x = _global.x = 10 && typeof x === 'undefined'`
            let strictGlobalTypeofPaths = state.strictGlobalTypeofPaths[identifierName];
            if (strictGlobalTypeofPaths)
              strictGlobalTypeofPaths.forEach(path => {
                path.replaceWith(t.memberExpression(state.globalIdentifier, path.node));
              });
            path.scope.getProgramParent().push({ id: path.node.left });
            path.replaceWith(t.assignmentExpression('=', t.memberExpression(state.globalIdentifier, path.node.left), path.node));
          }
        }
      },

      UnaryExpression (path, state) {
        if (state.inserting)
          return;
        if (path.node.operator === 'typeof' && t.isIdentifier(path.node.argument)) {
          let identifierName = path.node.argument.name;
          if (identifierName === 'require' && !path.scope.hasBinding(identifierName)) {
            path.replaceWith(t.stringLiteral('function'));
            dce(path);
          }
          else if (identifierName === 'module' && !path.scope.hasBinding(identifierName)) {
            path.replaceWith(t.stringLiteral('object'))
            dce(path);
          }
          else if (!state.isStrict && !path.scope.hasBinding(identifierName)) {
            // note all typeof x to do conversion into typeof _global.x if a strict assignment later
            (state.strictGlobalTypeofPaths[identifierName] = state.strictGlobalTypeofPaths[identifierName] || [])
            .push(path.get('argument'));
          }
        }
      }
    }
  };
}
