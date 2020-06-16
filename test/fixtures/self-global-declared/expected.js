var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};
var _self = 10;
_global.global = 5;

function p() {
  return _global;
}

exports = p();
export default exports;