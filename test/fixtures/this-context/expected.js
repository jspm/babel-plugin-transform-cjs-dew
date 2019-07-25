var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.asdf = {
    obj: 'x'
  };
  (function (exports) {
    (this || _global).another = 'y';
    exports.p = 'q';
  }).call(exports.asdf, exports);
  return exports;
}