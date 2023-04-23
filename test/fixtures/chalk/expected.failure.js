import _process from "process";
var process = _process;
// Example of a use of the "process" global that isn't picked up in chalk@2.4.2:
const isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
export default {};