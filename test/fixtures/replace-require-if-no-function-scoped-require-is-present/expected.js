import { exports as _fooExports, __dew__ as _fooExecute } from "foo";
import { exports as _barExports, __dew__ as _barExecute } from "bar/";
var exports = {};

var __dew__ = function () {
  __dew__ = null;

  (function () {
    if (false) {
      _fooExecute && _fooExecute() || _fooExports;
      _barExecute && _barExecute() || _barExports;
    }

    if (eval('typeof require') != 'undefined') {
      exports.cjs = true;
    }
  })();
};

export { exports, __dew__ };