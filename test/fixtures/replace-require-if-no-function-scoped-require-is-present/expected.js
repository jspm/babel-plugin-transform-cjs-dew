import { exports as _fooExports, __demExec as _fooExecute } from 'foo';
import { exports as _barExports, __demExec as _barExecute } from 'bar/';
export var exports = {};
export var __demExec = function () {
  __demExec = null;


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
