import { dew as _fooDew } from "foo";
import { dew as _barDew } from "bar/";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  (function () {
    if (false) {
      _fooDew();

      _barDew();
    }

    if (eval('typeof require') != 'undefined') {
      exports.cjs = true;
    }
  })();

  return exports;
}