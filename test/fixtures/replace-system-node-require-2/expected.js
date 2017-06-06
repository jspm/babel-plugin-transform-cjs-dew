import { exports as _fooExports, __demExec as _fooExecute } from 'foo';
import { exports as _processExports, __demExec as _processExecute } from 'process';
export var exports = {};
export var __demExec = function () {
  __demExec = null;

  var process = _processExecute && _processExecute() || _processExports;

  exports = System._nodeRequire && (_fooExecute && _fooExecute() || _fooExports) || process;
};
