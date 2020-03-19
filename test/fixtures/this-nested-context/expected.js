var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};
!function (exports) {
  (this || _global).another = "y";
  console.log((this || _global).another);
  this["fn"]();
  exports.p = "q";
}(exports);
export default exports;