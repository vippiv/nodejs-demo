const config = require('./webpack.config.js')

config.module.rules.push({
	test: /\.(jpg|jpeg|gif|png|bmp)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				name: '[name].[ext]',
				publicPath: '../img/',
				outputPath: 'img/',
				limit: 1000
			}
		},
		{
			loader: 'image-webpack-loader',
			options: {
				disable: process.env.NODE_ENV !== 'production', // Disable during development
				mozjpeg: {
					progressive: true,
					quality: 75
				},
				optipng: {
					enabled: false, // 禁用optipng
				},
				pngquant: {
					quality: '75-90',
					speed: 4
				},
				gifsicle: {
					interlaced: false,
				}
				webp: { // webp选项将启用webp
				    quality: 75
				}
			}
		}
	]
})

module.exports = config