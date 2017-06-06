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

export var __demExec = function () {
  __demExec = null;
  var global;
  var self = 10;
  _global.global = global = 5;

  function p() {
    return global;
  }

  module.exports = p();
};
