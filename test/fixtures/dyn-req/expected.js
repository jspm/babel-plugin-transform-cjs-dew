import { dew as _xDew } from "/base/x";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = null;

  _xDew();
}