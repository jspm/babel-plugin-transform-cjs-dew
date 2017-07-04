export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};
export var __dew__ = function () {
  __dew__ = null;
  var exports = 'asdf';
  module.exports = 'asdf';
};
