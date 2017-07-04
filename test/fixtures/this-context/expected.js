export var exports = {};
export var __dew__ = function () {
  __dew__ = null;
  exports.asdf = { obj: 'x' };

  (function (exports) {
    this.another = 'y';

    exports.p = 'q';
  }).call(exports.asdf, exports);
};
