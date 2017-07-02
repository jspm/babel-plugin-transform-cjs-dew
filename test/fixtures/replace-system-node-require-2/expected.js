import { exports as _fooExports, __dewExec as _fooExecute } from 'foo';
import { exports as _processExports, __dewExec as _processExecute } from 'process';
export var exports = {};
export var __dewExec = function () {
  __dewExec = null;

  var process = _processExecute && _processExecute() || _processExports;

  exports = System._nodeRequire && (_fooExecute && _fooExecute() || _fooExports) || process;
};
