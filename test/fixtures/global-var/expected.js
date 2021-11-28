import { dew as _moduleDew } from "module";

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};

var _nodeRequire = function () {
  var Module = _moduleDew().Module;

  if (Module) {
    var m = new Module("");
    m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
    m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
    return Object.assign(m.require.bind(m), {
      resolve: function (id) {
        return Module._resolveFilename(id, m);
      }
    });
  } else {
    return function _nodeRequire(id) {
      var e = new Error("Cannot find module '" + id + "'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    };
  }
}();

/*! p5.js v1.4.0 June 29, 2021 */
!function (e) {
  exports = e();
}(function () {
  return function i(a, s, l) {
    function u(t, e) {
      if (!s[t]) {
        if (!a[t]) {
          var r = _nodeRequire;
          if (!e && r) return r(t, !0);
          if (c) return c(t, !0);
          var n = new Error("Cannot find module '" + t + "'");
          throw n.code = "MODULE_NOT_FOUND", n;
        }

        var o = s[t] = {
          exports: {}
        };
        a[t][0].call(o.exports, function (e) {
          return u(a[t][1][e] || e);
        }, o, o.exports, i, a, s, l);
      }

      return s[t].exports;
    }

    for (var c = _nodeRequire, e = 0; e < l.length; e++) u(l[e]);

    return u;
  }({
    1: [function (e, t, r) {
      "use strict";

      r.byteLength = function (e) {
        var t = d(e),
            r = t[0],
            n = t[1];
        return 3 * (r + n) / 4 - n;
      }, r.toByteArray = function (e) {
        var t,
            r,
            n = d(e),
            o = n[0],
            i = n[1],
            a = new c(function (e, t) {
          return 3 * (e + t) / 4 - t;
        }(o, i)),
            s = 0,
            l = 0 < i ? o - 4 : o;

        for (r = 0; r < l; r += 4) t = u[e.charCodeAt(r)] << 18 | u[e.charCodeAt(r + 1)] << 12 | u[e.charCodeAt(r + 2)] << 6 | u[e.charCodeAt(r + 3)], a[s++] = t >> 16 & 255, a[s++] = t >> 8 & 255, a[s++] = 255 & t;

        2 === i && (t = u[e.charCodeAt(r)] << 2 | u[e.charCodeAt(r + 1)] >> 4, a[s++] = 255 & t);
        1 === i && (t = u[e.charCodeAt(r)] << 10 | u[e.charCodeAt(r + 1)] << 4 | u[e.charCodeAt(r + 2)] >> 2, a[s++] = t >> 8 & 255, a[s++] = 255 & t);
        return a;
      }, r.fromByteArray = function (e) {
        for (var t, r = e.length, n = r % 3, o = [], i = 0, a = r - n; i < a; i += 16383) o.push(l(e, i, a < i + 16383 ? a : i + 16383));

        1 == n ? (t = e[r - 1], o.push(s[t >> 2] + s[t << 4 & 63] + "==")) : 2 == n && (t = (e[r - 2] << 8) + e[r - 1], o.push(s[t >> 10] + s[t >> 4 & 63] + s[t << 2 & 63] + "="));
        return o.join("");
      };

      for (var s = [], u = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, i = n.length; o < i; ++o) s[o] = n[o], u[n.charCodeAt(o)] = o;

      function d(e) {
        var t = e.length;
        if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4];
      }

      function l(e, t, r) {
        for (var n, o, i = [], a = t; a < r; a += 3) n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(s[(o = n) >> 18 & 63] + s[o >> 12 & 63] + s[o >> 6 & 63] + s[63 & o]);

        return i.join("");
      }

      u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63;
    }, {}],
    2: [function (e, t, r) {}, {}],
    3: [function (e, t, r) {
      arguments[4][2][0].apply(r, arguments);
    }, {
      dup: 2
    }],
    4: [function (U, e, N) {
      (function (d) {
        "use strict";

        var n = U("base64-js"),
            i = U("ieee754"),
            e = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        N.Buffer = d, N.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return d.alloc(+e);
        }, N.INSPECT_MAX_BYTES = 50;
        var r = 2147483647;

        function d(e, t, r) {
          if ("number" != typeof e) return o(e, t, r);
          if ("string" == typeof t) throw new TypeError("The \"string\" argument must be of type string. Received type number");
          return l(e);
        }
      }).call(this || _global, U("buffer").Buffer);
    }, {
      "base64-js": 1,
      buffer: 4,
      ieee754: 233
    }]
  }, {}, [245])(245);
});
export default exports;