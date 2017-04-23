import * as _foo from 'foo';
import * as _process from 'process';
var exports = {},
    module = {
  exports: exports
};
var process = _process.__useDefault ? _process.default : _process;
module.exports = System._nodeRequire ? process : _foo.__useDefault ? _foo.default : _foo;
export var __useDefault = true;
export default module.exports;
