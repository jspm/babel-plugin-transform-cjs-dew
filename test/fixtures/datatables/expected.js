import { dew as _jqueryDew } from "jquery";
import { dew as _datatablesDew } from "datatables.net";
import { dew as _testDew } from "test";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  /*! DataTables Bootstrap 5 integration
   * 2020 SpryMedia Ltd - datatables.net/license
   */
  !function (n) {
    var o, a;
    true ? (o = _jqueryDew(), a = function (e, t) {
      t.fn.dataTable || _datatablesDew()(e, t);
    }, "undefined" == typeof window ? exports = function (e, t) {
      return e = e || window, t = t || o(e), a(e, t), n(t, 0, e.document);
    } : (a(window, o), exports = n(o, window, window.document))) : n(jQuery, window, document);
  }();
  _testDew();
  return exports;
}