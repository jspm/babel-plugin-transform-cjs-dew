import * as _x from "./x";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.x = 5;
  exports.y = _x.__dew ? _x.__dew() : _x.default;
  return exports;
}