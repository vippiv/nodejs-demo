const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, '../src/main.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.(jpg|jpeg|bmp|png|gif)$/, use: [{
				loader: 'url-loader',
				options: {
					limit: 1000
				}
			}]}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			filename: 'index.html'
		}),
		new webpack.BannerPlugin({
			banner: 'copyright 2020 zwl'
		})
	]
}