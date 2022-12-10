import { dew as _thingDew } from "https://site.com/thing";
import { dew as _bDew } from "https://site.com/thing/b";
import { dew as _processCustomDew } from "process-custom.js";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _processCustomDew();
  var thing = _thingDew().thing;
  if (process.env.NODE_ENV === "production") var thingB = _bDew().b;
  return exports;
}