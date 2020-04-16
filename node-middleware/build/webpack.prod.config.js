const path = require('path')
const webpack = require('webpack')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const entrys = require('./entrys.js')

module.export = {
	entry: entrys,
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'Script/[name].js'
	},
	module: {
		rules: [
			{ test: /\.js$/, loader:'babel-loader' },
			{ test: /\.pug/, loader: 'pug-loader', options: {pretty: true}},
			{test: /\.scss$/,use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader',{loader: 'postcss-loader',options: {config: {path: './build/postcss.config.js'}}},'sass-loader']})}
		]
	},
	plugins: [
		new webpack.BannerPlugin('Copyright 2020 zwl'),
		new TransferWebpackPlugin([
			{ from: '../src/assets', to: '../dist/assets' },
			{ from: '../src/Views', to: '../dist/Views' }
		], path.resolve(__dirname)),
		new webpack.optiomze.OccurrenceOrderPlugin(),
		new ExtractTextPlugin({filename: 'Contents/[name].css', disable: false, allChunks: true}),
		// 混淆压缩js和css
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				properties: false,
				warning: false
			},
			output: {
				beautify: false,
				quote_keys: true
			},
			mangle: {
				screw_ie8: false
			},
			sourceMap: false,
			except: ['$', 'exports', 'require'] // 排除关键字
		})
	],
	stats: 'normal'
}