const EndlessArray = require(`${__dirname}/EndlessArrayPromise.js`);

module.exports = function fromCallback(func, startArgs = [], endArgs = []) {
	const endlessArray = new EndlessArray;
	
	func(...startArgs, (...args) => {
		endlessArray.add(args);
	}, ...endArgs);
	
	return endlessArray;
};