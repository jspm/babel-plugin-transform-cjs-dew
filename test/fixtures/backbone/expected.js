import { dew as _underscoreDew } from "underscore";
import { dew as _jqueryDew } from "jquery";
var exports = {},
  _dewExec = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  //     Backbone.js 1.5.0

  //     (c) 2010-2022 Jeremy Ashkenas and DocumentCloud
  //     Backbone may be freely distributed under the MIT license.
  //     For all details and documentation:
  //     http://backbonejs.org

  (function (factory) {
    // Set up Backbone appropriately for the environment. Start with AMD.

    if (true) {
      _underscoreDew(), $;
      try {
        _global.$ = _jqueryDew();
      } catch (e) {}
      factory(root, exports, _, $);
    }
  })(function (root, Backbone, _, $) {
    return Backbone;
  });
  return exports;
}