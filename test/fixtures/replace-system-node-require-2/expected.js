import { exports as _fooExports, __dew__ as _fooExecute } from "foo";
import { exports as _processExports, __dew__ as _processExecute } from "process";
var exports = {};

var __dew__ = function () {
  __dew__ = null;

  var process = _processExecute && _processExecute() || _processExports;

  exports = System._nodeRequire && (_fooExecute && _fooExecute() || _fooExports) || process;
};

export { exports, __dew__ };