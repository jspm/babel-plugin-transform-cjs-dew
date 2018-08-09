var exports = {};

var _global = typeof self !== "undefined" ? self : global;

var __dew__ = function () {
  var global;
  __dew__ = null;
  var self = 10;
  _global.global = global = 5;

  function p() {
    return global;
  }

  exports = p();
};

export { exports, __dew__ };