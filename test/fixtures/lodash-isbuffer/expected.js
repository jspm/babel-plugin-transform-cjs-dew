import { dew as _rootDew } from "./_root";
import { dew as _stubFalseDew } from "./stubFalse";
var exports = {},
  _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return module.exports;
  _dewExec = true;
  var root = _rootDew(),
    stubFalse = _stubFalseDew();

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && true && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
  * Checks if `value` is a buffer.
  *
  * @static
  * @memberOf _
  * @since 4.3.0
  * @category Lang
  * @param {*} value The value to check.
  * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
  * @example
  *
  * _.isBuffer(new Buffer(2));
  * // => true
  *
  * _.isBuffer(new Uint8Array(2));
  * // => false
  */
  var isBuffer = nativeIsBuffer || stubFalse;
  module.exports = isBuffer;
  return module.exports;
}