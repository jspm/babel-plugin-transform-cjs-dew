(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
      var v = factory(require, exports);
      if (v !== undefined) module.exports = v;
  }
  else if (typeof define === "function" && define.amd) {
      define(["require", "exports", "./quick-start", "@aurelia/debug", "@aurelia/fetch-client", "@aurelia/jit", "@aurelia/jit-html-browser", "@aurelia/kernel", "@aurelia/router", "@aurelia/runtime", "@aurelia/runtime-html"], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var quick_start_1 = require("./quick-start");
  exports.asdf = quick_start_1;
});
