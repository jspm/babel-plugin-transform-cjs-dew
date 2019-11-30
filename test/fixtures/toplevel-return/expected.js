var exports = {};

(function () {
  if (1) return 0;
  if (2) return;
  if (3) return a && b || c;
  {
    return 5;
  }
})();

export default exports;