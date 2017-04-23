var exports = {},
    module = {
  exports: exports
};
exports.asdf = { obj: 'x' };

(function (exports) {
  this.another = 'y';

  exports.p = 'q';
}).call(exports.asdf, exports);
export var __useDefault = true;
export default module.exports;
