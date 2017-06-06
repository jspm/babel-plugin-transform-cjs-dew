const path = require('path');
const fs = require('fs');
const assert = require('assert');
const transformFileSync = require('babel-core').transformFileSync;
const plugin = require('../transform-cjs-dem.js');

describe('Transformations', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map(caseName => {
    it(`Should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const optionsPath = path.join(fixtureDir, 'options.js');
      const exceptionPath = path.join(fixtureDir, 'exception.txt');

      const options = {
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

        assert.equal(actual.trim(), expected.trim());
      }
    });
  });
});
