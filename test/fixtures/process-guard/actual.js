if (typeof process !== 'undefined' && process.env.NODE_ENV === 'something') {
	console.log('guarded!');
}