var exports = {};
var module = {
  exports: exports
};
//! moment.js
//! version : 2.15.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
;

(function (global, factory) {
  module.exports = factory();
})(exports, function () {
  'use strict';

  function loadLocale(name) {
    var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

    if (!locales[name] && true && module && module.require) {
      try {
        oldLocale = globalLocale._abbr;

        module.require("./locale/" + name); // because defineLocale currently also sets the global locale, we
        // want to undo that for lazy loaded locales


        locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }

    return locales[name];
  }
});

export default module.exports;