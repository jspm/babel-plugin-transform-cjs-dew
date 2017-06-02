export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};

var _global = typeof self !== "undefined" ? self : global;

export var __esdew = function () {
  __esdew = null;
  var p;
  var global = 5;
  _global.p = p = 10;
  module.exports = global;
};
