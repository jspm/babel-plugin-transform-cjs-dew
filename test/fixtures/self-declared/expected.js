var exports = {};

var _global = typeof self !== "undefined" ? self : global;

var __dew__ = function () {
  __dew__ = null;
  var self = 10;

  function p() {
    return _global;
  }

  exports = p();
};

export { exports, __dew__ };