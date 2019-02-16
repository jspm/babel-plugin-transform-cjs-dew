import { dew as _moduleDew } from "module";
import { dew as _processDew } from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _moduleDew().Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (_processDew().platform === "win32"));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    }
  }();

  var require = _nodeRequire;

  require('asdf');

  return exports;
}