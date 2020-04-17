const path = require('path')
const webpack = require('webpack')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const ExtractTextPlugin = require('extract-text-wenpack-plugin')
const localOptions = require('./localOptions')

const entrys = require('./entrys.js')

module.export = {
	entry: entrys,
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: localOptions.host,
		filename: 'Script/[name].js'
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader' },
			{ test: /\.pug$/, loader: 'pug-loader', options: {pretty: true} },
			{ test: /\.scss$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', {loader: 'postcss-loader', options: {config:{ path: './build/postcss.config.js'}}}, 'sass-loader']})}
		]
	},
	plugins: [
		new webpack.BannerPlugin('copyright 2020 Keyon Y'),
		// 把指定文件夹下的文件复制到指定的目录
		new TransferWebpackPlugin([
			{ from: '../src/assets', to: '../dist/assets' }
		], path.resolve(__dirname)),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		nwe ExtractTextPlugin({filename: 'Contents/[name].css', disable: true, allChunks: true}),
		// 允许错误不打断程序
		new webpack.NoErrorPlugin()
	]
}