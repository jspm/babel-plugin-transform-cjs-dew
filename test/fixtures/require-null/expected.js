import { dew as _testDew } from "test";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function _nullRequire(id) {
    var e = new Error("Cannot find module '" + id + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }

  _nullRequire.resolve = _nullRequire;

  _testDew();

  if (_nullRequire) {
    const r = _nullRequire;
    r("hmm");
  }

  return exports;
}