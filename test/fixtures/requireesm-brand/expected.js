import * as _nobinding2 from "nobinding";
var _nobinding = _nobinding2;
try {
  if ("default" in _nobinding2) _nobinding = _nobinding2.default;
} catch (e) {}
import * as _fs2 from "fs";
var _fs = _fs2;
try {
  if ("default" in _fs2) _fs = _fs2.default;
} catch (e) {}
import * as _thing from "thing";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  _nobinding;
  const {
    readFileSync
  } = _fs;
  const {
    thing
  } = _thing;
  readFileSync("asdf");
  return exports;
}