import _fs from "fs";
import * as _thing from "thing";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const {
    readFileSync
  } = _fs;
  const {
    thing
  } = _thing;
  readFileSync("asdf");
  return exports;
}