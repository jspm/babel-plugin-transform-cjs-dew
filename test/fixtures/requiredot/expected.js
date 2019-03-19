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
      return m.require.bind(m);
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

  delete {}['asdf'];

  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = _nodeRequire.resolve('./asdf.js');

  fs.readFile(path);
  return module.exports;
}