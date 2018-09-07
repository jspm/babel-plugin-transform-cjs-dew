import { dew as _fooDew } from "foo";
import { dew as _processDew } from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var process = _processDew();

  exports = System._nodeRequire && _fooDew() || process;
}