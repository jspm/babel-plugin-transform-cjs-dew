export var exports = {};
export var __dewExec = function () {
  __dewExec = null;
  exports.asdf = { obj: 'x' };

  (function (exports) {
    this.another = 'y';

    exports.p = 'q';
  }).call(exports.asdf, exports);
};
