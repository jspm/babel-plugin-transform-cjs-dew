import _resolve from "dynamic-resolve";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  _resolve('node-gyp');

  return exports;
}