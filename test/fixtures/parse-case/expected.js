import { exports as _processExports, __dew__ as _processExecute } from "process";
var exports = {};

var __dew__ = function () {
  __dew__ = null;

  var process = _processExecute && _processExecute() || _processExports;

  process.env.NODE_ENV = 'test';
  if (process.env.DEBUG) other();
};

export { exports, __dew__ };