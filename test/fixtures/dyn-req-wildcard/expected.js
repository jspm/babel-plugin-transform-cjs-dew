import { dew as _xZDew } from "./x/z";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _xZDew();
  return exports;
}