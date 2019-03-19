import { dew as _moduleDew } from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _moduleDew().Module;

    if (Module) {
      var m = new Module(""),
          process = m.require("process");

      m.filename = import.meta.url.substr(7 + (process.platform === "win32"));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return Object.assign(m.require.bind(m), {
        resolve: function (id) {
          return Module._resolveFilename(id, m);
        }
      });
    } else {
      function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      }

      _nodeRequire.resolve = _nodeRequire;
      return _nodeRequire;
    }
  }();

  _nodeRequire.resolve('./x');

  _nodeRequire.resolve(`./x`);

  _nodeRequire.resolve(`./x/${thing}`);

  _nodeRequire.resolve('../x' + '/y');

  _nodeRequire.resolve(x);

  return exports;
}