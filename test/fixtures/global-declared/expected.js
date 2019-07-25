var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  var q;
  if (_dewExec) return exports;
  _dewExec = true;
  var global = 5;
  p = 10, _global.q = q = 11;
  exports = global;
  var obj = {};
  var p = {
    method: function () {
      obj = {};
    }
  };
  return exports;
}