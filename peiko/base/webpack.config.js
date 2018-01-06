var path = require('path');

module.exports = {
	entry:'./base/static/js/index.js', 
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	}
}