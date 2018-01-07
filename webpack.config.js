var path = require('path');
var webpack = require('webpack');
var nodEnv = process.env.NODE_ENV;

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'babel-polyfill',
		'./base/static/js/index.js'
	],  
	output: {	
       filename: 'bundle.js',
       publicPath: '/',
       path: path.resolve(__dirname, 'base/static/dist')
    },
	resolve: {
		extensions: [' ', '.js', '.jsx']
	},
	plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        ],
    module: {
		loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader?presets[]=env&presets[]=react'],
            }
        ]
	},
	watch: true,
};