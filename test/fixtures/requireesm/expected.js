import _fs from "fs";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const {
    readFileSync
  } = _fs;
  readFileSync('asdf');
  return exports;
}