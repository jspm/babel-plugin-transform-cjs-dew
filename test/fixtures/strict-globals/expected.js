var exports = {},
  _dewExec = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  console.log(_global.package.version);
  for (_global.interface in asdf) {
    console.log(_global.interface);
  }
  _global.static(x);

  // reserved but SHOULDNT change

  console.log(null);
  eval("");
  debugger;
  void 0;
  class A extends B {
    constructor() {
      console.log(super());
    }
  }
  return exports;
}