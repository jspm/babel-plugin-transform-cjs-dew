import * as _nobinding2 from "nobinding";

var _nobinding = "default" in _nobinding2 && Object.keys(_nobinding2).length === 1 ? _nobinding2.default : _nobinding2;

import * as _fs2 from "fs";

var _fs = "default" in _fs2 && Object.keys(_fs2).length === 1 ? _fs2.default : _fs2;

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