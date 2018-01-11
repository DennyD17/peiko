var webpack = require('webpack');
var path = require('path');
var nodEnv = process.env.NODE_ENV;


module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'babel-polyfill',
		'./base/static/js/index.jsx'
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
        new webpack.NoEmitOnErrorsPlugin(),
        ],
    module: {
		loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
	},
	watch: true,
};