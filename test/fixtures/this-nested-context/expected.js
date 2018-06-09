var exports = {};

var _global = typeof self !== "undefined" ? self : global;

var __dew__ = function () {
  __dew__ = null;
  !function (exports) {
    (this || _global).another = 'y';
    console.log((this || _global).another);
    this['fn']();
    exports.p = 'q';
  }(exports);
};

export { exports, __dew__ };