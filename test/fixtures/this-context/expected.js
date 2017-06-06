export var exports = {};
export var __demExec = function () {
  __demExec = null;
  exports.asdf = { obj: 'x' };

  (function (exports) {
    this.another = 'y';

    exports.p = 'q';
  }).call(exports.asdf, exports);
};
