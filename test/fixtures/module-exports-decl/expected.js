import _external from "external";
import _another from "another";
var exports = {};
var module = {
  exports: exports
};
module.exports = _external;
module.exports = _another;
{
  let exports = 5;
  module.exports = _another;
}
export default module.exports;