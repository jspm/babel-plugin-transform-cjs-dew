import { dew as _thingDew } from "https://site.com/thing";
import { dew as _thingBDew } from "https://site.com/thing/b";
import { dew as _processDew } from "process-custom.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var process = _processDew();

  var thing = _thingDew().thing;

  if (process.env.NODE_ENV === 'production') var thingB = _thingBDew().b;
}