var global;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};
var self = 10;
_global.global = global = 5;

function p() {
  return global;
}

exports = p();

function () {
  var global;
  var self = 10;
  _global.global = global = 5;

  function p() {
    return global;
  }

  exports = p();
}()

export default exports;