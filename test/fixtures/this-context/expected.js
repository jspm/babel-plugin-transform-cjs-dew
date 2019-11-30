var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};
exports.asdf = {
  obj: 'x'
};
(function (exports) {
  (this || _global).another = 'y';
  exports.p = 'q';
}).call(exports.asdf, exports);
export default exports;