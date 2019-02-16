import { dew as _processDew } from "process";
import { dew as _moduleDew } from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _moduleDew().Module;

    if (Module) {
      var m = new Module("", null);
      m.paths = Module._nodeModulePaths(_processDew().cwd());
      return m.require;
    }
  }();

  _nodeRequire('./addon.node');

  return exports;
}