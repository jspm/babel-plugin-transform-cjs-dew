export var exports = {};
var module = {
  exports: exports
};
export var __dew__ = function () {
  __dew__ = null;
  Object.defineProperty(module, 'exports', {
    get() {
      return 'yo';
    }
  });
  exports = module.exports;
};
