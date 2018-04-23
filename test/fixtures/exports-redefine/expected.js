var exports = {};
var module = {
  exports: exports
};

var __dew__ = function () {
  __dew__ = null;
  var exports = 'asdf';
  module.exports = 'asdf';
  exports = module.exports;
};

export { exports, __dew__ };