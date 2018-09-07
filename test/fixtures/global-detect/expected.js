var exports = {},
    _dewExec = false;

var _global = typeof self !== "undefined" ? self : global;

export function dew() {
  var x;
  if (_dewExec) return exports;
  _dewExec = true;
  if (typeof _global.x === 'undefined') _global.x = x = 'x';
  return exports;
}