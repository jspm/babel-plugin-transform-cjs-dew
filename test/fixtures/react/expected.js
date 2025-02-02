var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  if ("object" === typeof process && "function" === typeof process.emit) {
    console.log(typeof process === "object" && true);
    process.emit("uncaughtException", "boo");
    return;
  }
  return exports;
}