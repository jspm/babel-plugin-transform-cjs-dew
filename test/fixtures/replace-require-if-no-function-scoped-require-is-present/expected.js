import { exports as _fooExports, __dewExec as _fooExecute } from 'foo';
import { exports as _barExports, __dewExec as _barExecute } from 'bar/';
export var exports = {};
export var __dewExec = function () {
  __dewExec = null;


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
