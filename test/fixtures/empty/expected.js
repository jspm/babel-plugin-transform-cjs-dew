import { dew as _anotherDew } from "another";
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
      return m.require.bind(m);
    } else {
      return function (id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var thing = _nodeRequire('thing');

  var another = _anotherDew();

  exports.y = function p() {
    return _nodeRequire('thing');
  };

  return exports;
}