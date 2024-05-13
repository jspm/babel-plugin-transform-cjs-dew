/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */
!(function (n) {
  var o, a;
  "function" == typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (e) {
        return n(e, window, document);
      })
    : "object" == typeof exports
    ? ((o = require("jquery")),
      (a = function (e, t) {
        t.fn.dataTable || require("datatables.net")(e, t);
      }),
      "undefined" == typeof window
        ? (module.exports = function (e, t) {
            return (
              (e = e || window), (t = t || o(e)), a(e, t), n(t, 0, e.document)
            );
          })
        : (a(window, o), (module.exports = n(o, window, window.document))))
    : n(jQuery, window, document);
})();



require('test');