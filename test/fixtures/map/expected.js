import { exports as _thingExports, __demExec as _thingExecute } from 'https://site.com/thing';
import { exports as _thingBExports, __demExec as _thingBExecute } from 'https://site.com/thing/b';
import { exports as _processExports, __demExec as _processExecute } from 'process-custom.js';
export var exports = {};
export var __demExec = function () {
  __demExec = null;

  var process = _processExecute && _processExecute() || _processExports;

  var thing = (_thingExecute && _thingExecute() || _thingExports).thing;
  if (process.env.NODE_ENV === 'production') var thingB = (_thingBExecute && _thingBExecute() || _thingBExports).b;
};
