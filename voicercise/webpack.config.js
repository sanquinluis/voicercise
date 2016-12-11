var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: [
	'.src/js/app'
	],
 devtoll: 'eval-source-map',
 output: {
	path: __dirname,
	filename: 'app.js',
	publicPath: '/js/'
	},
 module: {
	loaders: []
	},
 module: {
	loaders: [{
	 test: /\.js$/,
	 loaders: ['bable'],
	 include: path.join(__dirname, 'src')
		}]
	}
};
