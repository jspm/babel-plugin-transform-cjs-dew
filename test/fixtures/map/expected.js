import { exports as _thingExports, __esdew as _thingExecute } from 'https://site.com/thing';
import { exports as _thingBExports, __esdew as _thingBExecute } from 'https://site.com/thing/b';
import { exports as _processExports, __esdew as _processExecute } from 'process-custom.js';
export var exports = {};
export var __esdew = function () {
  __esdew = null;

  var process = _processExecute && _processExecute() || _processExports;

  var thing = (_thingExecute && _thingExecute() || _thingExports).thing;
  if (process.env.NODE_ENV === 'production') var thingB = (_thingBExecute && _thingBExecute() || _thingBExports).b;
};
