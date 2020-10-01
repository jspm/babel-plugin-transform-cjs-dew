import _util from "util";
var exports = {};
exports.TextEncoder = typeof TextEncoder !== "undefined" ? TextEncoder : _util.TextEncoder;
exports.TextDecoder = typeof TextDecoder !== "undefined" ? TextDecoder : _util.TextDecoder;
export default exports;
const _TextEncoder = exports.TextEncoder,
      _TextDecoder = exports.TextDecoder;
export { _TextEncoder as TextEncoder, _TextDecoder as TextDecoder };