export var exports = {};
export var __esdew = function () {
  __esdew = null;
  exports.asdf = { obj: 'x' };

  (function (exports) {
    this.another = 'y';

    exports.p = 'q';
  }).call(exports.asdf, exports);
};
