import _process from "process";
var process = _process;
process.env.NODE_ENV = "test";
if (process.env.DEBUG) other();
export default {};