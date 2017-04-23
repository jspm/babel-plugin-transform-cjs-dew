# Babel CommonJS -> ESM plugin

This project aims for accuracy and reliability transforming CommonJS into ES modules.

```js
require('babel-core').transform('<source>', {
  plugins: [
    ['transform-cjs-esm', {
      define: {
        'process.env.NODE_ENV': '"development"',
        '__filename': '"custom-filename.js"',
        '__dirname': JSON.stringify('custom-dirname.js')
      }
    }]
  ]
});
```

The basic approach is:
* Defines the `exports` and `module` variables in module scope.
* Any use of `global` or `GLOBAL` defines global in the module scope.
* Exports `module.exports` as the default export, with a `__useDefault` interop indicator.
* Imports requires using the `__useDefault` interop method (the reverse of the `__esModule` interop).
* Top-level `this` is replaced with an `exports` reference.
* Implicit globals of the form `globalName = ...` are rescoped for a simple strict module conversion.
* Use of `Buffer` and `process` is transformed into an import of `buffer` or `process`.

_Note that this transform does not support the exact execution semantics of CommonJS, as all dependencies
are executed before the module execution. This can break assumptions in circular reference scenarios,
and when there are global reference assumptions relying on execution ordering._

The remaining cases that don't convert are then just the edge cases of loose -> strict mode conversion:
* Any use of `with` statements will throw
* Multiple duplicate function parameters
* Relying on dynamic arguments
* Assigning to reserved names
* Using eval to define variables
* Expecting `this` being the global as the default context for function calls

The above should comprehensively cover the failure cases.

## License

MIT
