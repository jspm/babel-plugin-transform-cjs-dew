var exports = {},
    module = {
  exports: exports
};

var _global = typeof self !== "undefined" ? self : global;

(function () {
  var global;
  var self = 10;
  _global.global = global = 5;

  function p() {
    return global;
  }

  module.exports = p();
})();

export var __useDefault = true;
export default module.exports;
