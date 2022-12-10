import { dew as _codemirrorDew } from "../../lib/codemirror";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // CodeMirror, copyright (c) by Marijn Haverbeke and others
  // Distributed under an MIT license: http://codemirror.net/LICENSE

  (function (mod) {
    // CommonJS
    mod(_codemirrorDew());
  })(function (CodeMirror) {});
  return exports;
}