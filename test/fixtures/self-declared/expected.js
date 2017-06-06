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
  var self = 10;

  function p() {
    return _global;
  }

  module.exports = p();
};
