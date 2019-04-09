import { dew as _moduleDew } from "module";
var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return module.exports;
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
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  delete {}['asdf'];

  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = _nodeRequire.resolve ? _nodeRequire.resolve('./asdf.js') : "/resolved";
  fs.readFile(path);
  return module.exports;
}