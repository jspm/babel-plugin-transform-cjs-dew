'use strict';

(function () {

  if (false) {
    require('foo');
    require('bar/');
  }

  if (typeof require != 'undefined' && eval('typeof require') != 'undefined') {
    exports.cjs = true;
  }
})();
