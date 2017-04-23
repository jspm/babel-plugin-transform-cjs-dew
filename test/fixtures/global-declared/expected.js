var exports = {},
    module = {
  exports: exports
};

var _global = typeof self !== "undefined" ? self : global;

(function () {
  var p;
  var global = 5;
  _global.p = p = 10;
  module.exports = global;
})();

export var __useDefault = true;
export default module.exports;
