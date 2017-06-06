export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};
export var __demExec = function () {
  __demExec = null;
  var exports = 'asdf';
  module.exports = 'asdf';
};
