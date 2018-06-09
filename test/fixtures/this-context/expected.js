var exports = {};

var _global = typeof self !== "undefined" ? self : global;

var __dew__ = function () {
  __dew__ = null;
  exports.asdf = {
    obj: 'x'
  };
  (function (exports) {
    (this || _global).another = 'y';
    exports.p = 'q';
  }).call(exports.asdf, exports);
};

export { exports, __dew__ };