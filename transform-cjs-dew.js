const { parse } = require('@babel/parser');
const { basename, extname } = require('path');
const stage3Syntax = ['asyncGenerators', 'classProperties', 'optionalCatchBinding', 'objectRestSpread', 'numericSeparator', 'dynamicImport', 'importMeta'];

// possibly have this binding configurable to an import in future
// (nodeRequireModule, nodeRequireExport)
// that could support taking import.meta and using import.meta.resolve / import.meta.url
function getNodeRequireBinding (path, state) {
  if (!state.nodeRequireBinding)
    state.nodeRequireBinding = path.scope.getProgramParent().generateUidIdentifier(state.opts.browserOnly ? 'nullRequire' : 'nodeRequire');
  return state.nodeRequireBinding;
}

module.exports = function ({ types: t }) {
  const exportsIdentifier = t.identifier('exports');
  exportsIdentifier.own = true;
  const moduleIdentifier = t.identifier('module');
  const dewIdentifier = t.identifier('dew');

  const globalThis = t.identifier('globalThis');
  const globalThisPredicate = t.binaryExpression('!==', t.unaryExpression('typeof', globalThis), t.stringLiteral('undefined'));
  const selfIdentifier = t.identifier('self');
  const ifSelfPredicate = t.binaryExpression('!==', t.unaryExpression('typeof', selfIdentifier), t.stringLiteral('undefined'));
  const requireSub = (dep) => {
    return dep.dew ? t.callExpression(dep.id, []) : dep.id;
  };
  const nodeRequire = (path, state, depNode) => {
    return t.callExpression(getNodeRequireBinding(path, state), [depNode]);
  };
  const moduleDeclarator = t.variableDeclaration('var', [
    t.variableDeclarator(moduleIdentifier, t.objectExpression([
      t.objectProperty(exportsIdentifier, exportsIdentifier)
    ]))
  ]);

  // we detect optional require based on pattern matching:
  // try { const? x = require('x') } catch (e) { ... }
  function isOptionalRequire (path) {
    if (t.isMemberExpression(path.parentPath))
      return isOptionalRequire(path.parentPath);
    const secondParent = path.parentPath && path.parentPath.parentPath;
    const fourthParent = secondParent.parentPath && secondParent.parentPath.parentPath;
    return secondParent && fourthParent &&
        t.isTryStatement(fourthParent) && fourthParent.node.block.body.length >= 1 &&
        (t.isVariableDeclarator(path.parentPath) && t.isVariableDeclaration(secondParent) ||
         t.isAssignmentExpression(path.parentPath) && t.isExpressionStatement(secondParent));
  }

  const cjsScopeVars = ['require', 'module', 'exports', '__filename', '__dirname'];

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

  function canResolvePartialWildcardString (node) {
    return t.isStringLiteral(node) || t.isTemplateLiteral(node) && node.quasis[0].value.cooked.length || t.isBinaryExpression(node) || t.isIdentifier(node) && node.name === '__dirname';
  }

  function addDependency (path, state, depModuleArg, optional = false) {
    const exprs = [];
    let depModule = resolvePartialWildcardString(depModuleArg, false, exprs);

    // no support for fully dynamic require
    if (depModule === '*') {
      return nodeRequire(path, state, depModuleArg);
    }

    let depResolved;

    if (depModule.indexOf('*') !== -1) {
      depResolved = state.opts.resolve(depModule, { wildcard: true, optional });

      if (typeof depResolved === 'string' && depResolved.indexOf('*') !== -1)
        return null;

      if (!depResolved)
        return nodeRequire(path, state, depModuleArg);

      if (depResolved instanceof Array) {
        // add each module as a dependency (still using resolver)
        // (we're kind of relying on .node wildcards not being common, could be added though)
        const depExprs = depResolved.map(m => generateDependency(m, path, state));

        const exprIds = exprs.map((_expr, i) => t.Identifier('e' + (i === 0 ? '' : i + 1)));

        // trailing * means we must permit wildcardExtensions variations
        const wildcardExtensions = depModule.endsWith('*') && state.opts.wildcardExtensions;

        const regEx = new RegExp(depModule.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '(.*)'));
        const matchExprs = depResolved.map(resolved => {
          const match = resolved.match(regEx);
          return exprs.map((_expr, i) => t.binaryExpression('===', exprIds[i], t.stringLiteral(match[i + 1]))).reduce((reduction, next, i) => {
            if (i === exprs.length - 1 && wildcardExtensions) {
              const str = match[i + 1];
              const ext = wildcardExtensions.find(ext => str.endsWith(ext));
              if (ext)
                next = t.logicalExpression('||', next, t.binaryExpression('===', exprIds[i], t.stringLiteral(str.substr(0, str.length - ext.length))));
            }
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
    }
    else {
      depResolved = state.opts.resolve(depModule, { optional });
    }

    if (depResolved === undefined)
      depResolved = depModule;

    if (depResolved === null || depResolved.endsWith('.node'))
      return nodeRequire(path, state, depModuleArg);

    return generateDependency(depResolved, path, state);
  }

  function generateDependency (depResolved, path, state) {
    if (typeof depResolved !== 'string')
      throw new Error('Expected a string.');
    if (depResolved === '@empty')
      return t.objectExpression([]);
    for (let dep of state.deps) {
      if (dep.literal.value === depResolved)
        return requireSub(dep, state);
    }
    let dew = true, ns = false;
    const esmDependency = state.opts.esmDependencies && state.opts.esmDependencies(depResolved);
    if (esmDependency === 'namespace')
      ns = true;
    if (esmDependency)
      dew = false;
    const uidName = basename(depResolved);
    const uidExt = extname(uidName);
    const depName = path.scope.getProgramParent().generateUidIdentifier(uidName.substr(0, uidName.length - uidExt.length)).name;
    const dep = {
      literal: t.stringLiteral(depResolved),
      id: t.identifier(depName + (dew ? 'Dew' : '')),
      dew,
      ns
    };
    state.deps.push(dep)
    return requireSub(dep, state);
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
          state.opts.resolve = state.opts.resolve || (m => m);
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
          state.usesModule = false;
          state.usesDynamicRequire = false;
          state.moduleDotExports = [];
          state.inserting = false;
          state.nodeRequireBinding = undefined;
          state.requireResolve = false;

          if (path.node.body.length !== 1 ||
              !t.isExpressionStatement(path.node.body[0]) ||
              !t.isCallExpression(path.node.body[0].expression) ||
              !t.isFunctionExpression(path.node.body[0].expression.callee) ||
              path.node.body[0].expression.arguments.length !== 1)
            return;
          const arg = path.node.body[0].expression.arguments[0];
          if (!t.isConditionalExpression(arg) ||
              !t.isLogicalExpression(arg.test, { operator: '&&' }) ||
              !t.isBinaryExpression(arg.test.left, { operator: '===' }) ||
              !t.isUnaryExpression(arg.test.left.left, { operator: 'typeof' }) ||
              !t.isIdentifier(arg.test.left.left.argument, { name: 'define' }) ||
              !t.isStringLiteral(arg.test.left.right, { value: 'function' }) ||
              !t.isMemberExpression(arg.test.right, { computed: false }) ||
              !t.isIdentifier(arg.test.right.object) ||
              !t.isIdentifier(arg.test.right.property, { name: 'amd' }) ||
              !t.isFunctionExpression(arg.alternate) ||
              arg.alternate.params.length !== 1 ||
              !t.isIdentifier(arg.alternate.params[0]) ||
              !t.isExpressionStatement(arg.alternate.body.body[0]) ||
              !t.isAssignmentExpression(arg.alternate.body.body[0].expression, { operator: '=' }))
            return;
          const expr = arg.alternate.body.body[0].expression;
          if (!t.isMemberExpression(expr.left, { computed: false }) ||
              !t.isIdentifier(expr.left.object, { name: 'module' }) ||
              !t.isIdentifier(expr.left.property, { name: 'exports' }) ||
              !t.isCallExpression(expr.right) ||
              !t.isIdentifier(expr.right.callee, { name: arg.alternate.params[0].name }) ||
              expr.right.arguments.length !== 1 ||
              !t.isIdentifier(expr.right.arguments[0], { name: 'require' }))
            return;
          let strictBody = t.isExpressionStatement(path.node.body[0].expression.callee.body.body[0]) &&
              t.isStringLiteral(path.node.body[0].expression.callee.body.body[0].expression, { value: 'use strict' });
          if (path.node.body[0].expression.callee.body.body.length !== strictBody + 1)
            return;
          const fn = path.node.body[0].expression.callee.body.body[+strictBody];
          if (!t.isExpressionStatement(fn) ||
              !t.isCallExpression(fn.expression) ||
              !t.isIdentifier(fn.expression.callee, { name: arg.test.right.object.name }) ||
              fn.expression.arguments.length !== 1 ||
              !t.isFunctionExpression(fn.expression.arguments[0]) ||
              fn.expression.arguments[0].params.length !== 1 ||
              !t.isIdentifier(fn.expression.arguments[0].params[0], { name: 'require' }))
            return;
          path.get('body.0.expression.callee.body.body.' + +strictBody + '.expression.arguments.0.params.0').remove();
          path.get('body.0.expression.arguments.0.alternate.body.body.0.expression.right.arguments.0').remove();
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
            if (dep) {
              path.unshiftContainer('body', t.variableDeclaration('var', [
                t.variableDeclarator(t.identifier('process'), dep)
              ]));
            }
          }

          if (state.hasBuffer) {
            let dep = addDependency(path, state, t.stringLiteral('buffer'));
            if (dep) {
              path.unshiftContainer('body', t.variableDeclaration('var', [
                t.variableDeclarator(t.identifier('Buffer'), t.memberExpression(dep, t.identifier('Buffer')))
              ]));
            }
          }

          /*
           * nodeRequire special cases
           */
          if (state.nodeRequireBinding) {
            if (state.opts.browserOnly) {
              const e = t.identifier('e');
              const id = t.identifier('id');
              path.unshiftContainer('body', t.functionDeclaration(state.nodeRequireBinding, [id], t.blockStatement([
                t.variableDeclaration('var', [
                  t.variableDeclarator(e, t.newExpression(t.identifier('Error'), [
                    t.binaryExpression('+', t.binaryExpression('+', t.stringLiteral("Cannot find module '"), id), t.stringLiteral("'"))
                  ]))
                ]),
                t.expressionStatement(t.assignmentExpression('=', t.memberExpression(e, t.identifier('code')), t.stringLiteral('MODULE_NOT_FOUND'))),
                t.throwStatement(e)
              ])));
            }
            else {
              const module = addDependency(path, state, t.stringLiteral('module'));
              const Module = t.identifier('Module');
              const m = t.identifier('m');
              const e = t.identifier('e');
              const id = t.identifier('id');
              const filename = t.identifier('filename');

              let requireFn = t.callExpression(
                t.memberExpression(t.memberExpression(m, t.identifier('require')), t.identifier('bind')),
                [m]
              );

              if (state.requireResolve) {
                requireFn = t.callExpression(
                  t.memberExpression(t.identifier('Object'), t.identifier('assign')),
                  [
                    requireFn,
                    t.objectExpression([
                      t.objectProperty(t.identifier('resolve'), t.functionExpression(null, [id], t.blockStatement([
                        t.returnStatement(t.callExpression(t.memberExpression(Module, t.identifier('_resolveFilename')), [id, m]))
                      ])))
                    ])
                  ]
                );
              }

              path.unshiftContainer('body', t.variableDeclaration('var', [
                t.variableDeclarator(state.nodeRequireBinding, t.callExpression(t.functionExpression(null, [], t.blockStatement([
                  t.variableDeclaration('var', [
                    t.variableDeclarator(Module, t.memberExpression(module, Module))
                  ]),
                  t.ifStatement(Module, t.blockStatement([
                    t.variableDeclaration('var', [
                      t.variableDeclarator(m, t.newExpression(Module, [t.stringLiteral('')]))
                    ]),
                    t.expressionStatement(t.assignmentExpression('=',
                      t.memberExpression(m, filename),
                      t.callExpression(
                        t.memberExpression(t.memberExpression(
                          t.metaProperty(t.identifier('import'), t.identifier('meta')),
                          t.identifier('url')
                        ), t.identifier('substr')),
                        [t.binaryExpression('+',
                          t.numericLiteral(7),
                          t.binaryExpression('>',
                            t.memberExpression(t.memberExpression(t.callExpression(t.memberExpression(Module, t.identifier('_nodeModulePaths')), [t.stringLiteral('/')]), t.numericLiteral(0), true), t.identifier('length')),
                            t.numericLiteral(13)
                          )
                        )]
                      )
                    )),
                    t.expressionStatement(t.assignmentExpression('=',
                      t.memberExpression(m, t.identifier('paths')),
                      t.callExpression(t.memberExpression(Module, t.identifier('_nodeModulePaths')), [
                        t.callExpression(t.memberExpression(t.memberExpression(m, filename), t.identifier('substr')), [
                          t.numericLiteral(0),
                          t.callExpression(t.memberExpression(t.memberExpression(m, filename), t.identifier('lastIndexOf')), [t.stringLiteral('/')])
                        ])
                      ])
                    )),
                    t.returnStatement(requireFn)
                  ]), t.blockStatement([t.returnStatement(t.functionExpression(state.nodeRequireBinding, [id], t.blockStatement([
                    t.variableDeclaration('var', [
                      t.variableDeclarator(e, t.newExpression(t.identifier('Error'), [
                        t.binaryExpression('+', t.binaryExpression('+', t.stringLiteral("Cannot find module '"), id), t.stringLiteral("'"))
                      ]))
                    ]),
                    t.expressionStatement(t.assignmentExpression('=', t.memberExpression(e, t.identifier('code')), t.stringLiteral('MODULE_NOT_FOUND'))),
                    t.throwStatement(e)
                  ])))]))
                ])), []))
              ]));
            }
          }

          /*
           * Construct the full body wrapper
           */
          // path to ensure bindings are created for exports and __dew__
          // tracking at https://github.com/babel/babel/issues/8358
          function unshiftBody (path, newNode) {
            const [newPath] = path.unshiftContainer('body', newNode);
            if (t.isVariableDeclaration(newPath)) {
              for (const decl of newPath.get('declarations')) {
                path.scope.registerBinding(decl.node.id.name, decl.get('id'));
              }
            }
          }
          function pushBody (path, newNode) {
            const [newPath] = path.pushContainer('body', newNode);
            if (t.isVariableDeclaration(newPath)) {
              for (const decl of newPath.get('declarations')) {
                path.scope.registerBinding(decl.node.id.name, decl.get('id'));
              }
            }
          }

          if (state.opts.nowrap) {
            state.inserting = true;

            let curChildren;
            if (state.topLevelReturn) {
              curChildren = [];
              for (const childPath of path.get('body')) {
                curChildren.push(childPath);
              }
            } 

            if (state.usesModule)
              unshiftBody(path, moduleDeclarator);
            unshiftBody(path, t.variableDeclaration('var', [
              t.variableDeclarator(exportsIdentifier, t.objectExpression([]))
            ]));
            if (state.usesGlobal) {
              unshiftBody(path, 
                t.variableDeclaration('var', [t.variableDeclarator(state.globalIdentifier,
                  t.conditionalExpression(globalThisPredicate, globalThis, t.conditionalExpression(ifSelfPredicate, selfIdentifier, t.identifier('global')))
                )]));
            }
            for (let i = state.deps.length - 1; i >= 0; i--) {
              const dep = state.deps[i];
              unshiftBody(path, 
                t.importDeclaration([
                  dep.dew ? t.importSpecifier(dep.id, dewIdentifier) : (dep.ns ? t.importNamespaceSpecifier : t.importDefaultSpecifier)(dep.id)
                ], dep.literal)
              );
            }
            // top-level return still requires a wrapper
            if (state.topLevelReturn) {
              pushBody(path, 
                t.expressionStatement(t.callExpression(t.functionExpression(null, [], t.blockStatement(curChildren.map(path => path.node))), []))
              );
              for (const path of curChildren)
                path.remove();
            }
            pushBody(path,
              t.exportDefaultDeclaration(state.usesModule ? t.memberExpression(moduleIdentifier, exportsIdentifier) : exportsIdentifier)
            );
            return;
          }

          let dewBodyWrapper = [];

          state.deps.forEach(dep => {
            dewBodyWrapper.push(
              t.importDeclaration([
                dep.dew ? t.importSpecifier(dep.id, dewIdentifier) : (dep.ns ? t.importNamespaceSpecifier : t.importDefaultSpecifier)(dep.id)
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
                t.conditionalExpression(globalThisPredicate, globalThis, t.conditionalExpression(ifSelfPredicate, selfIdentifier, t.identifier('global')))
              )]));

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
          
          for (let i = 0; i < dewBodyWrapper.length; i++)
            pushBody(path, dewBodyWrapper[i]);
        }
      },

      // octal upgrade
      NumericLiteral (path, state) {
        const raw = path.node.extra && path.node.extra.raw;
        if (raw && raw[0] === '0' && parseInt(raw[1], 10).toString() === raw[1]) {
          path.node.extra.raw = '0o' + path.node.extra.raw.slice(1);
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
                  path.parent.arguments.length === 1) {
                state.requireResolve = true;
                const expr = path.parent.arguments[0];
                const arg = resolvePartialWildcardString(expr, false, []);
                // browser resolve wildcards not currently supported
                let resolved = arg.indexOf('*') !== -1 ? null : state.opts.resolve(arg, { browserResolve: true });
                if (resolved === undefined)
                  resolved = arg;
                const requireBinding = getNodeRequireBinding(path,  state);
                if (state.opts.browserOnly) {
                  if (resolved === null) {
                    // _nodeRequire(expr)
                    path.parentPath.replaceWith(t.callExpression(requireBinding, [expr]));
                  }
                  else {
                    // './browser-string';
                    path.parentPath.replaceWith(t.stringLiteral(resolved));
                  }
                }
                else {
                  if (resolved === null) {
                    // (_nodeRequire.resolve || _nodeRequire)(expr)  
                    path.parentPath.replaceWith(t.callExpression(t.logicalExpression('||',
                      t.memberExpression(requireBinding, t.identifier('resolve')),
                      requireBinding
                    ), [expr]));
                  }
                  else {
                    // _nodeRequire.resolve ? _nodeRequire.resolve(expr) : './browser-string';
                    path.parentPath.replaceWith(t.conditionalExpression(
                      t.memberExpression(requireBinding, t.identifier('resolve')),
                      t.callExpression(t.memberExpression(requireBinding, t.identifier('resolve')), [expr]),
                      t.stringLiteral(resolved)
                    ));
                  }
                }
              }
              // non-call of require.resolve -> support only in Node.js case
              else {
                state.requireResolve = true;
                path.get('object').replaceWith(getNodeRequireBinding(path,  state));
              }
            break;
            // TODO: require.main === module -> import.meta.main
            case 'main':
              path.replaceWith(t.identifier('undefined'));
            break;
            case 'extensions':
            case 'cache':
              path.replaceWith(t.objectExpression([]));
            break;
            default:
              path.replaceWith(t.identifier('undefined'));
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
            const parentParentNode = parentPath.parentPath && parentPath.parentPath.node;
            // Promise.resolve(require(dyn)) -> Promise.resolve(import(dyn))
            if (t.isCallExpression(parentParentNode) &&
                parentParentNode.arguments.length === 1 &&
                parentParentNode.arguments[0] === parentPath.node &&
                t.isMemberExpression(parentParentNode.callee) &&
                t.isIdentifier(parentParentNode.callee.object, { name: 'Promise' }) &&
                t.isIdentifier(parentParentNode.callee.property, { name: 'resolve' }) &&
                !canResolvePartialWildcardString(parentPath.node.arguments[0])) {
              parentPath.replaceWith(
                t.callExpression(
                  t.memberExpression(t.callExpression(t.import(), parentPath.node.arguments), t.identifier('then')),
                  [t.arrowFunctionExpression([t.identifier('m')], t.memberExpression(t.identifier('m'), t.identifier('default')))]
                )
              );
            }
            else {
              const dep = addDependency(path, state, parentPath.node.arguments[0], isOptionalRequire(parentPath));
              if (dep) {
                parentPath.replaceWith(dep);
              }
            }
          }
          else {
            // dynamic require -> node require
            // path.replaceWith(t.nullLiteral());
            // dce(path);
            if (!t.isMemberExpression(path.parentPath) || path.parentPath.node.object !== path.node) {
              if (!state.opts.browserOnly) {
                path.replaceWith(getNodeRequireBinding(path, state));
              }
            }
          }
        }
        else if (identifierName === '__non_webpack_require__') {
          path.replaceWith(getNodeRequireBinding(path, state));
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
                parentPath.replaceWith(t.arrayExpression([]));
              break;
              // require alternative
              case 'require':
                if (t.isCallExpression(parentPath.parent) && parentPath.parent.callee === parentPath.node) {
                  parentPath.parentPath.replaceWith(addDependency(parentPath, state, parentPath.parent.arguments[0], isOptionalRequire(parentPath.parentPath)));
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
        if (state.functionDepth === 0) {
          if (state.opts.nowrap) {
            state.topLevelReturn = true;
          }
          else if (path.node.argument) {
            if (t.isLogicalExpression(path.node.argument) && t.isIdentifier(path.node.argument.right, { name: 'undefined' }))
              return;
            path.get('argument').replaceWith(t.logicalExpression('&&', path.node.argument, t.identifier('undefined')));
          }
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
        if (path.node.operator === 'delete' && t.isIdentifier(path.node.argument)) {
          path.remove();
        }
      }
    }
  };
}
