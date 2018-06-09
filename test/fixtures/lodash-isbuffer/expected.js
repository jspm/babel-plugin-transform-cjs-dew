import { exports as _rootExports, __dew__ as _rootExecute } from "./_root";
import { exports as _stubFalseExports, __dew__ as _stubFalseExecute } from "./stubFalse";
var exports = {};
var module = {
  exports: exports
};

var __dew__ = function () {
  __dew__ = null;

  var root = _rootExecute && _rootExecute() || _rootExports,
      stubFalse = _stubFalseExecute && _stubFalseExecute() || _stubFalseExports;
  /** Detect free variable `exports`. */


  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
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
  exports = module.exports;
};

export { exports, __dew__ };