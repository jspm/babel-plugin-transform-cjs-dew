import { exports as _thingExports, __dew__ as _thingExecute } from 'https://site.com/thing';
import { exports as _thingBExports, __dew__ as _thingBExecute } from 'https://site.com/thing/b';
import { exports as _processExports, __dew__ as _processExecute } from 'process-custom.js';
var exports = {};

var __dew__ = function () {
  __dew__ = null;

  var process = _processExecute && _processExecute() || _processExports;

  var thing = (_thingExecute && _thingExecute() || _thingExports).thing;
  if (process.env.NODE_ENV === 'production') var thingB = (_thingBExecute && _thingBExecute() || _thingBExports).b;
};

export { exports, __dew__ };