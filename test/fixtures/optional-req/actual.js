var x;
try {
  x = require('x');
}
catch (e) {}

if (x)
  console.log('Have optional');
else
  console.log('No optional');