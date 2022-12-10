import { dew as _xbDew } from "/base/xb";
import { dew as _xDew } from "/base/x";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _xbDew();
  _xDew();
  return exports;
}