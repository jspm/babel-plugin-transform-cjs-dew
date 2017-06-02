module.exports = function ({ types: t, template: template }) {
  const exportsIdentifier = t.identifier('exports');
  const executeIdentifier = t.identifier('__esdew');

  const exportExports = t.exportNamedDeclaration(
      t.variableDeclaration('var', [t.variableDeclarator(exportsIdentifier, t.objectExpression([]))]), []);
  const selfIdentifier = t.identifier('self');
  const ifSelfPredicate = t.binaryExpression('!==', t.unaryExpression('typeof', selfIdentifier), t.stringLiteral('undefined'));
  const requireSub = dep => {
    return t.logicalExpression('||',
      t.logicalExpression('&&', dep.execute, t.callExpression(dep.execute, [])),
      dep.exports
    );
  };
  const moduleDeclarator = t.variableDeclaration('var', [
    t.variableDeclarator(t.identifier('module'), t.objectExpression([
      t.objectMethod('get', exportsIdentifier, [], t.blockStatement([
        t.returnStatement(exportsIdentifier)
      ])),
      t.objectMethod('set', exportsIdentifier, [t.identifier('_exports')], t.blockStatement([
        t.expressionStatement(
          t.assignmentExpression('=', exportsIdentifier, t.identifier('_exports'))
        )
      ]))
    ]))
  ]);

  // given a string literal expression
  // resolve it as far as we can, by resolving the base part,
  // and the trailing part as a wildcard
  function partialResolve (expr, resolve) {
    if (t.isStringLiteral(expr)) {
      return t.stringLiteral(resolve(expr.value));
    }
    else if (t.isTemplateLiteral(expr)) {

    }
    else if (t.isBinaryExpression(expr)) {

    }
  }

  function addDependency (state, depName, depModule) {
    for (let dep of state.deps) {
      if (dep.literal.value === depModule)
        return dep;
    }
    // apply any map configuration
    if (state.opts.map) {
      let match;
      for (let target in state.opts.map) {
        if (!Object.hasOwnProperty.call(state.opts.map, target))
          continue;
        if (depModule.startsWith(target) &&
            (depModule.length === target.length || depModule[target.length] === '/') &&
            (!match || match.length < target.length))
          match = target;
      }
      if (match)
        depModule = state.opts.map[match] + depModule.substr(match.length);
    }
    let dep = {
      literal: t.stringLiteral(depModule),
      exports: t.identifier(depName + 'Exports'),
      execute: t.identifier(depName + 'Execute'),
    };
    state.deps.push(dep)
    return dep;
  }

  return {
    visitor: {
      Program: {
        enter (path, state) {
          path.node.directives.forEach((d, index) => {
            if (d.value && d.value.value === 'use strict') {
              state.isStrict = true;
              path.node.directives.splice(index, 1);
            }
          });

          state.define = {};
          if (state.opts.define)
            Object.keys(state.opts.define).forEach(defineName => {
              let parts = defineName.split('.');
              let part = parts.shift();
              let curDefineObj = state.define[part] = {
                defineName: undefined,
                defineProperty: undefined,
                defineSource: undefined
              };
              while (part = parts.shift()) {
                curDefineObj.defineName = part;

                if (parts.length)
                  curDefineObj = curDefineObj.defineProperty = {
                    defineName: undefined,
                    defineProperty: undefined,
                    defineSource: undefined
                  };
              }

              curDefineObj.defineSource = state.opts.define[defineName];
            });

          state.deps = [];
          state.functionDepth = 0;
          state.curAssignment = undefined;
          state.globalIdentifier = path.scope.generateUidIdentifier('global');
          state.usesGlobal = false;
          state.redefinesSelfOrGlobal = false;
          state.usesModule = false;
        },
        exit (path, state) {
          state.functionDepth = -1;

          /*
           * Add process and Buffer imports
           */
          if (state.hasProcess) {
            let processModule = path.scope.generateUidIdentifier('process');
            let dep = addDependency(state, processModule.name, 'process');
            path.unshiftContainer('body', t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier('process'), requireSub(dep))
            ]));
          }

          if (state.hasBuffer) {
            let bufferModule = path.scope.generateUidIdentifier('Buffer');
            let dep = addDependency(state, bufferModule.name, 'process');
            path.unshiftContainer('body', t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier('Buffer'), requireSub(dep))
            ]));
          }

          /*
           * Construct the full body wrapper
           */
          let dewBodyWrapper = [];

          state.deps.forEach(dep => {
            dewBodyWrapper.push(
              t.importDeclaration([
                t.importSpecifier(dep.exports, exportsIdentifier),
                t.importSpecifier(dep.execute, executeIdentifier)
              ], dep.literal)
            );
          });

          dewBodyWrapper.push(exportExports);

          if (state.usesModule)
            dewBodyWrapper.push(moduleDeclarator);

          if (state.usesGlobal)
            dewBodyWrapper.push(
              t.variableDeclaration('var', [t.variableDeclarator(state.globalIdentifier,
                t.conditionalExpression(ifSelfPredicate, selfIdentifier, t.identifier('global')))
              ])
            );

          dewBodyWrapper.push(
            t.exportNamedDeclaration(
              t.variableDeclaration('var', [
                t.variableDeclarator(
                  executeIdentifier,
                  t.functionExpression(null, [], t.blockStatement([
                    t.expressionStatement(
                      t.assignmentExpression('=',
                        executeIdentifier,
                        t.nullLiteral()
                      )
                    ),
                    ...path.node.body
                  ]))
                )
              ]),
              []
            )
          );

          path.node.body = dewBodyWrapper;
        }
      },

      /*
       * Require support
       */
      CallExpression (path, state) {
        if (t.isIdentifier(path.node.callee, { name: 'require' })) {
          let arg = path.node.arguments[0];
          if (!t.isStringLiteral(arg))
            throw new Error('Dynamic require expressions such as `require(sourceVar)` are not supported by this transform.');

          let dep = addDependency(state,
            path.scope.getProgramParent().generateUidIdentifier(arg.value).name,
            arg.value
          );

          path.replaceWith(requireSub(dep));
        }
      },

      /*
       * Define plugin
       * Detect unsupported require lookups
       */
      MemberExpression (path, state) {
        if (t.isIdentifier(path.node.object, { name: 'require' }) && !path.scope.hasBinding('require')) {
          let name = path.node.computed ? path.node.property.value : path.node.property.name;
          if (name)
          switch (name) {
            case 'resolve':
              if (t.isCallExpression(path.parent) && path.parent.callee === path.node &&
                  path.parent.arguments.length === 1 && state.opts.requireResolve) {
                let resolveArgPath = path.parentPath.get('arguments.0');
                resolveArgPath.replaceWith(partialResolve(resolveArgPath.node, state.opts.requireResolve));
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
        if (t.isIdentifier(path.node.object, { name: 'module' }) && !path.scope.hasBinding('module')) {
          let name = path.node.computed ? path.node.property.value : path.node.property.name;
          if (name)
          switch (name) {
            case 'id':
            case 'filename':
              if (state.opts.filename)
                path.replaceWith(t.stringLiteral(state.opts.filename));
            break;
            case 'parent':
              path.replaceWith(t.identifier('undefined'));
            break;
            case 'loaded':
            break;
            case 'children':
              path.replaceWith(t.objectExpression([]));
            break;
            case 'paths':
              path.replaceWith(t.objectExpression([]));
            break;
            // require alternative
            case 'require':
              if (t.isCallExpression(path.parent) && path.parent.callee === path.node) {
                let arg = path.parent.arguments[0];
                if (!t.isStringLiteral(arg))
                  throw new Error('Dynamic require expressions such as `require(sourceVar)` are not supported by this transform.');

                let dep = addDependency(state,
                  path.scope.getProgramParent().generateUidIdentifier(arg.value).name,
                  arg.value
                );

                path.parentPath.replaceWith(requireSub(dep));
              }
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
        let identifierName = path.node.name;

        if (state.define.hasOwnProperty(identifierName)) {
          let definePath = path;
          let definedIdentifier = state.define[identifierName];
          if (definedIdentifier.defineProperty) {
            while (definedIdentifier.defineProperty) {
              let parent = definePath.parentPath.node;
              if (!t.isMemberExpression(parent) || parent.object !== definePath.node ||
                  !t.isIdentifier(parent.property, { name: definedIdentifier.defineName })) {
                definePath = undefined;
                break;
              }
              definePath = definePath.parentPath;
              definedIdentifier = definedIdentifier.defineProperty;
            }
            definePath = definePath.parentPath;
          }
          if (definePath) {
            definePath.replaceWithSourceString(definedIdentifier.defineSource);
            return;
          }
        }

        if (!state.hasProcess && identifierName === 'process' && !path.scope.hasBinding('process'))
          state.hasProcess = true;
        if (!state.hasBuffer && identifierName === 'Buffer' && !path.scope.hasBinding('Buffer'))
          state.hasBuffer = true;
        if (!state.usesModule && identifierName === 'module' && !path.scope.hasBinding('module'))
          state.usesModule = true;
        if (identifierName === '__filename' && state.opts.filename && !path.scope.hasBinding('__filename'))
          path.replaceWith(t.stringLiteral(state.opts.filename));
        if (identifierName === '__dirname' && state.opts.filename && !path.scope.hasBinding('__dirname')) {
          let parts = state.opts.filename.split('/');
          parts.pop();
          path.replaceWith(t.stringLiteral(parts.join('/')));
        }

        if (identifierName === 'global' && !path.scope.hasBinding('global')) {
          state.usesGlobal = true;
          path.replaceWith(state.globalIdentifier);
        }
      },

      /*
       * Top-level return must be falsy
       */
      ReturnStatement (path, state) {
        if (state.functionDepth === 0 && path.node.argument)
          path.get('argument').replaceWith(t.logicalExpression('&&', path.node.argument, t.identifier('undefined')));
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
        if (state.functionDepth === 0)
          path.replaceWith(exportsIdentifier);
      },

      /*
       * Unbound global handling
       */
      AssignmentExpression (path, state) {
        // avoid circular transform
        if (path.node === state.curAssignment) {
          state.curAssignment = undefined;
          return;
        }

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
           * Strict conversion
           * p = 5; where p is unbound -> p added to top scope
           */
          if (!state.isStrict && !path.scope.hasBinding(identifierName))
            path.scope.getProgramParent().push({ id: path.node.left });

          /*
           * Detect top-level global binding assignments
           * p = 5; -> global.p = p = 5;
           */
          let binding = path.scope.getBinding(identifierName);
          if (binding && !binding.scope.parent) {
            state.curAssignment = path.node;
            state.usesGlobal = true;
            path.replaceWith(t.assignmentExpression('=', t.memberExpression(state.globalIdentifier, path.node.left), path.node));
          }
        }
      },


      UnaryExpression (path) {
        if (path.node.operator === 'typeof' && path.node.argument.name === 'require' && !path.scope.hasBinding('require')) {
          /*
           * typeof require === 'function' / typeof require == 'function' => true (convenience simplification)
           */
          if (t.isBinaryExpression(path.parentPath.node) && t.isStringLiteral(path.parentPath.node.right, { value: 'function' })) {
            switch (path.parentPath.node.operator) {
              case '==':
              case '===':
                path.parentPath.replaceWith(t.booleanLiteral(true));
                return;

              case '!=':
              case '!==':
                path.parentPath.replaceWith(t.booleanLiteral(false));
                return;
            }
          }
          /*
           * typeof require === 'undefined' / typeof require == 'undefined' => true (convenience simplification)
           */
          if (t.isBinaryExpression(path.parentPath.node) && t.isStringLiteral(path.parentPath.node.right, { value: 'undefined' })) {
            switch (path.parentPath.node.operator) {
              case '==':
              case '===':
                path.parentPath.replaceWith(t.booleanLiteral(false));
                return;

              case '!=':
              case '!==':
                path.parentPath.replaceWith(t.booleanLiteral(true));
                return;
            }
          }
          /*
           * typeof require -> 'function'
           */
          path.replaceWith(t.stringLiteral('function'));
        }
      }
    }
  };
}
