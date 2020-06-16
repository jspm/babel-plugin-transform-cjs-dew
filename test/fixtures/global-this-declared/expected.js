var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var _globalThis = 5;
_global.globalThis = 10;
console.log(_globalThis);

(function () {
  console.log((this || _global).globalThis);
})();

export default {};