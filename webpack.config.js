const path = require('path');

module.exports = {
	//entry path for bundle
	entry: path.join(__dirname, '/client/src/app.jsx'),
	//bundle file we will get in result
	output: {
		path: path.join(__dirname, '/client/dist/js'),
		filename: 'app.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, '/client/src'),
			loader: 'babel-loader',
			query: {
				presets: ["react", "es2015"]
			}
		}],
	},
	watch: true
}