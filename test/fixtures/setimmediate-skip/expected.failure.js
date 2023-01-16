import _process from "process";
var process = _process;
const maybeSetImmediate = "undefined" !== typeof process.nextTick ? process.nextTick : null;
export default {};