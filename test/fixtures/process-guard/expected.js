var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  if (typeof process !== "undefined" && process.env.NODE_ENV === "something") {
    console.log("guarded!");
  }
  return exports;
}