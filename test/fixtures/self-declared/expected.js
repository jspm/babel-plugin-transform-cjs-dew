var exports = {},
    _dewExec = false;

var _global = typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var self = 10;

  function p() {
    return _global;
  }

  exports = p();
  return exports;
}