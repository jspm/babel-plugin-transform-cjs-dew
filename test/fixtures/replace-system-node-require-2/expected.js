import { exports as _fooExports, __esdew as _fooExecute } from 'foo';
import { exports as _processExports, __esdew as _processExecute } from 'process';
export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};
export var __esdew = function () {
  __esdew = null;

  var process = _processExecute && _processExecute() || _processExports;

  module.exports = System._nodeRequire && (_fooExecute && _fooExecute() || _fooExports) || process;
};
