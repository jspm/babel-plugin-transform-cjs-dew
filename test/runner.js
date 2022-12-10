const path = require('path');
const fs = require('fs');
const assert = require('assert');
const { transform, transformFileSync } = require('@babel/core');
const plugin = require('../transform-cjs-dew.js');

describe('Transformations', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map(caseName => {
    it(`Should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const optionsPath = path.join(fixtureDir, 'options.js');
      const exceptionPath = path.join(fixtureDir, 'exception.txt');

      const options = {
        sourceType: 'script',
        babelrc: false,
        parserOpts: {
          allowReturnOutsideFunction: true
        },
        plugins: fs.existsSync(optionsPath) ? [[plugin, require(optionsPath)]] : [plugin]
      };

      if (fs.existsSync(exceptionPath)) {
        const exception = fs.readFileSync(exceptionPath).toString();

        assert.throws(() => transformFileSync(actualPath, options), new RegExp(exception));
      }
      else {
        const actual = transformFileSync(actualPath, options).code;
        const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString();

        try {
          assert.equal(actual.trim().replace(/\r\n|\n\r/g, '\n'), expected.trim().replace(/\r\n|\n\r/g, '\n'));
        }
        catch (e) {
          fs.writeFileSync(path.join(fixtureDir, process.env.UPDATE_FIXTURES ? 'expected.js' : 'expected.failure.js'), actual.trim());
          throw e;
        }
      }
    });
  });
});

describe('Dependency branch pruning', () => {
  it(`Should not report dependencies on pruned branches`, () => {
    let seenX = false, seenQ = false, seenInvalid = false;
    const options = {
      babelrc: false,
      parserOpts: {
        allowReturnOutsideFunction: true
      },
      plugins: [[plugin, {
        resolve (x) {
          if (x === 'x')
            seenX = true;
          else if (x === 'q')
            seenQ = true;
          else
            seenInvalid = true;
        },
        define: {
          'process.env.NODE_ENV': '"production"'
        }
      }]]
    };

    const source = `
if (process.env.NODE_ENV === 'production')
  require('x');
else
  require('y');

var s = process.env.NODE_ENV === 'dev' ? require('p') : require('q');
`;

    assert.equal(transform(source, options).code, `import { dew as _xDew } from "x";
import { dew as _qDew } from "q";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  _xDew();
  var s = _qDew();
  return exports;
}`);

    assert.equal(seenX, true);
    assert.equal(seenQ, true);
    assert.equal(seenInvalid, false);
  });
});
