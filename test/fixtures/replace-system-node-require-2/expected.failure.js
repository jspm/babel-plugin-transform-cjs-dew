import { dew as _fooDew } from "foo";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = System._nodeRequire && _fooDew() || process;
  return exports;
}