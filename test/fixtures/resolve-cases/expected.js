import { dew as _moduleDew } from "module";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var _nodeRequire = function () {
    var Module = _moduleDew().Module;
    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
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
  _nodeRequire.resolve ? _nodeRequire.resolve("./x") : "/base/x";
  _nodeRequire.resolve ? _nodeRequire.resolve(`./x`) : "/base/x";
  (_nodeRequire.resolve || _nodeRequire)(`./x/${thing}`);
  _nodeRequire.resolve ? _nodeRequire.resolve("../x" + "/y") : "/x/y";
  (_nodeRequire.resolve || _nodeRequire)(x);
  return exports;
}