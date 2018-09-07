var exports = {},
    _dewExec = false;

var _global = typeof self !== "undefined" ? self : global;

export function dew() {
  var global;
  if (_dewExec) return exports;
  _dewExec = true;
  var self = 10;
  _global.global = global = 5;

  function p() {
    return global;
  }

  exports = p();
}