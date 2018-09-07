import { dew as _processDew } from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var process = _processDew();

  process.env.NODE_ENV = 'test';
  if (process.env.DEBUG) other();
}