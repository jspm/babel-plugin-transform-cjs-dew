var exports = {};
var module = {
  exports: exports
};

var __dew__ = function () {
  __dew__ = null;
  Object.defineProperty(module, 'exports', {
    get() {
      return 'yo';
    }

  });
  exports = module.exports;
};

export { exports, __dew__ };