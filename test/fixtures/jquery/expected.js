var exports = {};

var __dew__ = function () {
  __dew__ = null;
  /*!
   * jQuery JavaScript Library v3.2.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2017-03-20T18:59Z
   */
  (function (global, factory) {
    "use strict";

    if (true && typeof exports === "object") {
      // For CommonJS and CommonJS-like environments where a proper `window`
      // is present, execute the factory and get jQuery.
      // For environments that do not have a `window` with a `document`
      // (such as Node.js), expose a factory as module.exports.
      // This accentuates the need for the creation of a real `window`.
      // e.g. var jQuery = require("jquery")(window);
      // See ticket #14549 for more info.
      exports = global.document ? factory(global, true) : function (w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w);
      };
    } else {
      factory(global);
    }

    // Pass this if window is not defined yet
  })(typeof window !== "undefined" ? window : exports, function (window, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";

    var arr = [];

    var document = window.document;

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call(Object);

    var support = {};

    function DOMEval(code, doc) {
      doc = doc || document;

      var script = doc.createElement("script");

      script.text = code;
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    /* global Symbol */
    // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module

    var version = "3.2.1",

    // Define a local copy of jQuery
    jQuery = function (selector, context) {
      // The jQuery object is actually just the init constructor 'enhanced'
      // Need init if jQuery is called (just allow error to be thrown if not included)
      return new jQuery.fn.init(selector, context);
    },

    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

    // Matches dashed string for camelizing
    rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g,

    // Used by jQuery.camelCase as callback to replace()
    fcamelCase = function (all, letter) {
      return letter.toUpperCase();
    };

    jQuery.fn = jQuery.prototype = {
      // The current version of jQuery being used
      jquery: version,

      constructor: jQuery,

      // The default length of a jQuery object is 0
      length: 0,

      toArray: function () {
        return slice.call(this);
      },

      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function (num) {
        // Return all the elements in a clean array
        if (num == null) {
          return slice.call(this);
        }

        // Return just the one element from the set
        return num < 0 ? this[num + this.length] : this[num];
      },

      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function (elems) {
        // Build a new jQuery matched element set
        var ret = jQuery.merge(this.constructor(), elems);

        // Add the old object onto the stack (as a reference)
        ret.prevObject = this;

        // Return the newly-formed element set
        return ret;
      },

      // Execute a callback for every element in the matched set.
      each: function (callback) {
        return jQuery.each(this, callback);
      },

      map: function (callback) {
        return this.pushStack(jQuery.map(this, function (elem, i) {
          return callback.call(elem, i, elem);
        }));
      },

      slice: function () {
        return this.pushStack(slice.apply(this, arguments));
      },

      first: function () {
        return this.eq(0);
      },

      last: function () {
        return this.eq(-1);
      },

      eq: function (i) {
        var len = this.length,
            j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },

      end: function () {
        return this.prevObject || this.constructor();
      },

      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: push,
      sort: arr.sort,
      splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function () {
      var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = false;

      // Handle a deep copy situation
      if (typeof target === "boolean") {
        deep = target;

        // Skip the boolean and the target
        target = arguments[i] || {};
        i++;
      }

      // Handle case when target is a string or something (possible in deep copy)
      if (typeof target !== "object" && !jQuery.isFunction(target)) {
        target = {};
      }

      // Extend jQuery itself if only one argument is passed
      if (i === length) {
        target = this;
        i--;
      }

      for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
          // Extend the base object
          for (name in options) {
            src = target[name];
            copy = options[name];

            // Prevent never-ending loop
            if (target === copy) {
              continue;
            }

            // Recurse if we're merging plain objects or arrays
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && Array.isArray(src) ? src : [];
              } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }

              // Never move original objects, clone them
              target[name] = jQuery.extend(deep, clone, copy);

              // Don't bring in undefined values
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }

      // Return the modified object
      return target;
    };

    jQuery.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

      // Assume jQuery is ready without the ready module
      isReady: true,

      error: function (msg) {
        throw new Error(msg);
      },

      noop: function () {},

      isFunction: function (obj) {
        return jQuery.type(obj) === "function";
      },

      isWindow: function (obj) {
        return obj != null && obj === obj.window;
      },

      isNumeric: function (obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") &&
        // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      },

      isPlainObject: function (obj) {
        var proto, Ctor;

        // Detect obvious negatives
        // Use toString instead of jQuery.type to catch host objects
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }

        proto = getProto(obj);

        // Objects with no prototype (e.g., `Object.create( null )`) are plain
        if (!proto) {
          return true;
        }

        // Objects with prototype are plain iff they were constructed by a global Object function
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },

      isEmptyObject: function (obj) {
        /* eslint-disable no-unused-vars */
        // See https://github.com/eslint/eslint/issues/6125
        var name;

        for (name in obj) {
          return false;
        }
        return true;
      },

      type: function (obj) {
        if (obj == null) {
          return obj + "";
        }

        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      },

      // Evaluates a script in a global context
      globalEval: function (code) {
        DOMEval(code);
      },

      // Convert dashed to camelCase; used by the css and data modules
      // Support: IE <=9 - 11, Edge 12 - 13
      // Microsoft forgot to hump their vendor prefix (#9572)
      camelCase: function (string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      },

      each: function (obj, callback) {
        var length,
            i = 0;

        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        }

        return obj;
      },

      // Support: Android <=4.0 only
      trim: function (text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      },

      // results is for internal usage only
      makeArray: function (arr, results) {
        var ret = results || [];

        if (arr != null) {
          if (isArrayLike(Object(arr))) {
            jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
          } else {
            push.call(ret, arr);
          }
        }

        return ret;
      },

      inArray: function (elem, arr, i) {
        return arr == null ? -1 : indexOf.call(arr, elem, i);
      },

      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function (first, second) {
        var len = +second.length,
            j = 0,
            i = first.length;

        for (; j < len; j++) {
          first[i++] = second[j];
        }

        first.length = i;

        return first;
      },

      grep: function (elems, callback, invert) {
        var callbackInverse,
            matches = [],
            i = 0,
            length = elems.length,
            callbackExpect = !invert;

        // Go through the array, only saving the items
        // that pass the validator function
        for (; i < length; i++) {
          callbackInverse = !callback(elems[i], i);
          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
          }
        }

        return matches;
      },

      // arg is for internal usage only
      map: function (elems, callback, arg) {
        var length,
            value,
            i = 0,
            ret = [];

        // Go through the array, translating each of the items to their new values
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i < length; i++) {
            value = callback(elems[i], i, arg);

            if (value != null) {
              ret.push(value);
            }
          }

          // Go through every key on the object,
        } else {
          for (i in elems) {
            value = callback(elems[i], i, arg);

            if (value != null) {
              ret.push(value);
            }
          }
        }

        // Flatten any nested arrays
        return concat.apply([], ret);
      },

      // A global GUID counter for objects
      guid: 1,

      // Bind a function to a context, optionally partially applying any
      // arguments.
      proxy: function (fn, context) {
        var tmp, args, proxy;

        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }

        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!jQuery.isFunction(fn)) {
          return undefined;
        }

        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function () {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };

        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

        return proxy;
      },

      now: Date.now,

      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: support
    });

    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }

    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.

    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if (typeof define === "function" && define.amd) {
      define("jquery", [], function () {
        return jQuery;
      });
    }

    var // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
    _$ = window.$;

    jQuery.noConflict = function (deep) {
      if (window.$ === jQuery) {
        window.$ = _$;
      }

      if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
      }

      return jQuery;
    };

    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (!noGlobal) {
      window.jQuery = window.$ = jQuery;
    }

    return jQuery;
  });
};

export { exports, __dew__ };