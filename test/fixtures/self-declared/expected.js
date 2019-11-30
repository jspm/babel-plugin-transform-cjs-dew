var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};
var self = 10;

function p() {
  return _global;
}

exports = p();
export default exports;