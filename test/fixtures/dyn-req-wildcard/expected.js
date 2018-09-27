import { dew as _xDew } from "./x/z";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _xDew();
  return exports;
}