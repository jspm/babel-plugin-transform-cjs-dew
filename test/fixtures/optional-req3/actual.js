let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

if (x)
  console.log('Have optional');
else
  console.log('No optional');