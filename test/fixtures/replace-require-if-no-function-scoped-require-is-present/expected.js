import * as _foo from 'foo';
import * as _bar from 'bar/';
var exports = {},
    module = {
  exports: exports
};


(function () {

  if (false) {
    _foo.__useDefault ? _foo.default : _foo;
    _bar.__useDefault ? _bar.default : _bar;
  }

  if (true && eval('typeof require') != 'undefined') {
    exports.cjs = true;
  }
})();
export var __useDefault = true;
export default module.exports;
