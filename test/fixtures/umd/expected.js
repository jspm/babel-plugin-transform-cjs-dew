var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  !function (name, definition) {
    exports = definition();
  }('domready', function (ready) {
    return {};
  });
}