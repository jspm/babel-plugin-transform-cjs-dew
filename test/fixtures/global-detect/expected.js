var x;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

if (typeof _global.x === "undefined") _global.x = x = "x";
export default {};