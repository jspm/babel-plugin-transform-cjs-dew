var exports = {};
!function (name, definition) {
  exports = definition();
}('domready', function (ready) {
  return {};
});

function () {
  !function (name, definition) {
    exports = definition();
  }('domready', function (ready) {
    return {};
  });
}()

export default exports;