import { dew as _odsDew } from "./ods";

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

function parse_ods(zip, opts) {
  if (typeof ODS === "undefined") _global.ODS = _odsDew();
  if (typeof ODS === "undefined" || !ODS.parse_ods) throw new Error("Unsupported ODS");
  return ODS.parse_ods(zip, opts);
}

export default {};