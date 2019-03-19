import { dew as _zDew } from "./x/z";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _zDew();
  return exports;
}