module.exports = function ({ types: t, template: template }) {
  const exportUseDefault = t.exportNamedDeclaration(
      t.variableDeclaration('var', [t.variableDeclarator(t.identifier('__useDefault'), t.booleanLiteral(true))]), []);
  const selfIdentifier = t.identifier('self');
  const ifSelfPredicate = t.binaryExpression('!==', t.unaryExpression('typeof', selfIdentifier), t.stringLiteral('undefined'));

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
          state.redefinesModule = false;
        },
        exit (path, state) {
          state.functionDepth = -1;

          if (state.redefinesSelfOrGlobal && state.usesGlobal) {
            path.node.body = [
              t.expressionStatement(t.callExpression(t.functionExpression(null, [], t.blockStatement(path.node.body)), []))
            ];
          }

          /*
           * Add process and Buffer imports
           */
          if (state.hasProcess) {
            let processModule = path.scope.generateUidIdentifier('process');
            state.deps.push({
              depLiteral: t.stringLiteral('process'),
              depIdentifier: processModule
            });
            path.unshiftContainer('body', t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier('process'), t.conditionalExpression(
                t.memberExpression(processModule, t.identifier('__useDefault')),
                t.memberExpression(processModule, t.identifier('default')),
                processModule
              ))
            ]));
          }

          if (state.hasBuffer) {
            let bufferModule = path.scope.generateUidIdentifier(path.node.name);
            state.deps.push({
              depLiteral: t.stringLiteral('buffer'),
              depIdentifier: bufferModule
            });
            path.unshiftContainer('body', t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier('Buffer'), t.conditionalExpression(
                t.memberExpression(bufferModule, t.identifier('__useDefault')),
                t.memberExpression(bufferModule, t.identifier('default')),
                bufferModule
              ))
            ]));
          }

          /*
           * Create global, module, exports
           */
          if (state.usesGlobal)
            path.unshiftContainer('body', [
              t.variableDeclaration('var', [t.variableDeclarator(state.globalIdentifier,
                t.conditionalExpression(ifSelfPredicate, selfIdentifier, t.identifier('global')))
              ])
            ]);

          let exportsModuleDeclarators = [
            t.variableDeclarator(t.identifier('exports'), t.objectExpression([])),
            t.variableDeclarator(t.identifier('module'), t.objectExpression([
              t.objectProperty(t.identifier('exports'), t.identifier('exports'))
            ]))
          ];

          let moduleIdentifier = state.redefinesModule ? path.scope.generateUidIdentifier('module') : t.identifier('module');
          if (state.redefinesModule)
            exportsModuleDeclarators.push(t.variableDeclarator(moduleIdentifier, t.identifier('module')));

          path.unshiftContainer('body', t.variableDeclaration('var', exportsModuleDeclarators));

          /*
           * Add imports
           */
          let importStatements = [];
          state.deps.forEach(dep => {
            importStatements.push(t.importDeclaration([t.importNamespaceSpecifier(dep.depIdentifier)], dep.depLiteral));
          });
          path.unshiftContainer('body', importStatements);

          /*
           * Add default export (with __useDefault)
           */
          path.pushContainer('body', [
            exportUseDefault,
            t.exportDefaultDeclaration(t.memberExpression(moduleIdentifier, t.identifier('exports')))
          ]);
        }
      },

      /*
       * Require support
       */
      CallExpression (path, state) {
        if (t.isIdentifier(path.node.callee, { name: 'require' })) {
          if (path.node.arguments.length !== 1)
            throw new Error('Only require statements with a single argument are supported by this transform.');

          if (!t.isStringLiteral(path.node.arguments[0]))
            throw new Error('Dynamic require expressions such as `require(sourceVar)` are not supported by this transform.');

          let dep = {
            depLiteral: path.node.arguments[0],
            depIdentifier: path.scope.getProgramParent().generateUidIdentifier(path.node.arguments[0].value)
          };

          state.deps.push(dep);

          path.replaceWith(t.conditionalExpression(
            t.memberExpression(dep.depIdentifier, t.identifier('__useDefault')),
            t.memberExpression(dep.depIdentifier, t.identifier('default')),
            dep.depIdentifier
          ));
        }
      },

      /*
       * Define plugin
       * Detect unsupported require lookups
       */
      MemberExpression (path, state) {
        if (t.isIdentifier(path.object, { name: 'require' }) && !path.scope.hasBinding('require'))
          throw new Error('require.resolve, require.main, require.extensions and require.cache, etc are not supported by this transform.');
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

        if (identifierName === 'global' && !path.scope.hasBinding('global')) {
          state.usesGlobal = true;
          path.replaceWith(state.globalIdentifier);
        }
      },

      /*
       * Detect top-level scope redefine of "self", "global" or "module"
       */
      VariableDeclarator (path, state) {
        if (state.functionDepth === 0) {
          if (path.node.id.name === 'self' || path.node.id.name === 'global' || path.node.id.name === 'GLOBAL')
            state.redefinesSelfOrGlobal = true;
          else if (path.node.id.name === 'module')
            state.redefinesModule = true;
        }
      },

      /*
       * top-level this.X -> exports.X
       */
      ThisExpression (path, state) {
        if (state.functionDepth === 0)
          path.replaceWith(t.identifier('exports'));
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
           * Catch "self", "global" or "module" redefinitions
           */
          if (identifierName === 'self' || identifierName === 'global' || identifierName === 'GLOBAL') {
            if (!path.scope.hasBinding(identifierName))
              state.redefinesSelfOrGlobal = true;
          }
          else if (identifierName === 'module' && !path.scope.hasBinding('module')) {
            state.redefinesModule = true;
            return;
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
