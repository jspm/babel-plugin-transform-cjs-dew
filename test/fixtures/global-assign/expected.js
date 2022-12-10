var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
// performance.now()
if (typeof performance === "undefined") {
  _global.performance = {};
}
if (!performance.now) {
  var nowOffset = Date.now();
  if (performance.timing && performance.timing.navigationStart) {
    nowOffset = performance.timing.navigationStart;
  }
  performance.now = function () {
    return Date.now() - nowOffset;
  };
}
export default {};