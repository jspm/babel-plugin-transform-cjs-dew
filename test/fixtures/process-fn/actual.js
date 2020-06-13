function process () {
	console.log('custom process');
}

setImmediate(() => {
	process();
});