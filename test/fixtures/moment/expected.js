var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  //! moment.js
  ;

  (function (global, factory) {
    typeof exports === 'object' && true ? exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
  })(exports, function () {
    'use strict';

    if (true && exports) console.log('yes');
    return {
      a: 'a'
    };
  });
}