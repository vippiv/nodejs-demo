const config = require('./webpack.config.js')
const ImageMinPlugin = require('imagemin-webpack-plugin').default

config.module.rules.push({
	test: /\.(jpg|jpeg|png|bmp|gif)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				publicPath: '../img/',
				outputPath: 'img/'
			}
		}
	]
})

config.plugins.push(
	new ImageMinPlugin({
		disable: process.env.NODE_ENV !== 'production', // Disable during development
		pngquant: {
			quality: '75'
		}
	})
)

module.exports = config