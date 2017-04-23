var exports = {},
    module = {
  exports: exports
};

var _global = typeof self !== "undefined" ? self : _global;

(function () {
  var self = 10;

  function p() {
    return _global;
  }

  module.exports = p();
})();

export var __useDefault = true;
export default module.exports;
