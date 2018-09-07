var exports = {},
    _dewExec = false;

var _global = typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  !function (exports) {
    (this || _global).another = 'y';
    console.log((this || _global).another);
    this['fn']();
    exports.p = 'q';
  }(exports);
}