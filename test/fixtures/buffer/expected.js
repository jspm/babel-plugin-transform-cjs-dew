import { dew as _bufferDew } from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Buffer = _bufferDew().Buffer;

  console.log(Buffer);
}