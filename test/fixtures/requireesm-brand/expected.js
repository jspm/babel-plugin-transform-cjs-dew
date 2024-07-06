import * as _nobinding2 from "nobinding";
import * as _fs2 from "fs";
import * as _thing from "thing";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var _nobinding = _nobinding2.__cjs ? _nobinding2.default : "default" in _nobinding2 && !_nobinding2.__esModule ? new Proxy(_nobinding2, {
    get: (t, k, r) => k === "__esModule" || Reflect.get(t, k, r),
    has: (t, k) => k === "__esModule" || Reflect.has(t, k)
  }) : _nobinding2;
  var _fs = _fs2.__cjs ? _fs2.default : "default" in _fs2 && !_fs2.__esModule ? new Proxy(_fs2, {
    get: (t, k, r) => k === "__esModule" || Reflect.get(t, k, r),
    has: (t, k) => k === "__esModule" || Reflect.has(t, k)
  }) : _fs2;
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