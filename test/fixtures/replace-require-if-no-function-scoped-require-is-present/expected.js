import { exports as _fooExports, __esdew as _fooExecute } from 'foo';
import { exports as _barExports, __esdew as _barExecute } from 'bar/';
export var exports = {};
export var __esdew = function () {
  __esdew = null;


  (function () {

    if (false) {
      _fooExecute && _fooExecute() || _fooExports;
      _barExecute && _barExecute() || _barExports;
    }

    if (true && eval('typeof require') != 'undefined') {
      exports.cjs = true;
    }
  })();
};
