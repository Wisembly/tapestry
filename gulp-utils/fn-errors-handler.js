module.exports = function (error) {
	console.log('Error: ' + error);
	return this.emit('end');
};
