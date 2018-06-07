import { exports as _bufferExports, __dew__ as _bufferExecute } from "buffer";
var exports = {};

var __dew__ = function () {
  __dew__ = null;

  var Buffer = (_bufferExecute && _bufferExecute() || _bufferExports).Buffer;

  console.log(Buffer);
};

export { exports, __dew__ };