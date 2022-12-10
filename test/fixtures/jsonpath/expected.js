import { dew as _moduleDew } from "module";
var exports = {},
  _dewExec = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
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
  /*! jsonpath 1.0.2 */

  (function (f) {
    exports = f();
  })(function () {
    var define, module, exports;
    return function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = _nodeRequire;
            if (!u && a) return a(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o] = {
            exports: {}
          };
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = _nodeRequire;
      for (var o = 0; o < r.length; o++) s(r[o]);
      return s;
    }({
      "./aesprim": [function (require, module, exports) {
        (function (root, factory) {
          'use strict';

          // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
          // Rhino, and plain browser loading.

          /* istanbul ignore next */
          if (typeof define === "function" && define.amd) {
            define(["exports"], factory);
          } else if (typeof exports !== "undefined") {
            factory(exports);
          } else {
            factory(root.esprima = {});
          }
        })(this || _global, function (exports) {
          'use strict';
        });
        /* vim: set sw=4 ts=4 et tw=80 : */
      }, {}],
      1: [function (require, module, exports) {
        (function (process) {
          if (typeof require !== "undefined" && typeof exports !== "undefined") {
            exports.parser = parser;
            exports.Parser = parser.Parser;
            exports.parse = function () {
              return parser.parse.apply(parser, arguments);
            };
            exports.main = function commonjsMain(args) {
              if (!args[1]) {
                console.log("Usage: " + args[0] + " FILE");
                process.exit(1);
              }
              var source = require("fs").readFileSync(require("path").normalize(args[1]), "utf8");
              return exports.parser.parse(source);
            };
            if (typeof module !== "undefined" && require.main === module) {
              exports.main(process.argv.slice(1));
            }
          }
        }).call(this || _global, require("_process"));
      }, {
        "_process": 14,
        "fs": 12,
        "path": 13
      }],
      2: [function (require, module, exports) {
        module.exports = {
          identifier: "[a-zA-Z_]+[a-zA-Z0-9_]*",
          integer: "-?(?:0|[1-9][0-9]*)",
          qq_string: "\"(?:\\\\[\"bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^\"\\\\])*\"",
          q_string: "'(?:\\\\['bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^'\\\\])*'"
        };
      }, {}],
      3: [function (require, module, exports) {
        var dict = require("./dict");
        var fs = require("fs");
        if (fs.readFileSync) {
          grammar.moduleInclude = fs.readFileSync(require.resolve("../include/module.js"));
          grammar.actionInclude = fs.readFileSync(require.resolve("../include/action.js"));
        }
        module.exports = grammar;
      }, {
        "./dict": 2,
        "fs": 12
      }],
      4: [function (require, module, exports) {
        var aesprim = require("./aesprim");
        var slice = require("./slice");
        var _evaluate = require("static-eval");
        var _uniq = require("underscore").uniq;
        module.exports = Handlers;
      }, {
        "..": "jsonpath",
        "./aesprim": "./aesprim",
        "./index": 5,
        "./slice": 7,
        "static-eval": 15,
        "underscore": 12
      }],
      5: [function (require, module, exports) {
        var assert = require("assert");
        var dict = require("./dict");
        var Parser = require("./parser");
        var Handlers = require("./handlers");
        Parser.grammar = grammar;
        module.exports = Parser;
      }, {
        "../generated/parser": 1,
        "./grammar": 3
      }],
      "jsonpath": [function (require, module, exports) {
        module.exports = require("./lib/index");
      }, {
        "./lib/index": 5
      }]
    }, {}, ["jsonpath"])("jsonpath");
  });
  return exports;
}