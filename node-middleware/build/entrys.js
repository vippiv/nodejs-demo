const webpackHotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&timeout=2000'
const isDev = process.env.NODE_ENV === 'dev'
const transJson = {}

const entryJson = {
	base: '../src/Components/base/base.js',
	index: '../src/Components/index/index.js',
	message: '../src/Components/message/message.js',
	home: '../src/Components/home/home.js',
	modals: '../src/Components/modals/modals.js',
}

if (isDev) {
	const transJson = {}
	for(let e in entryJson) {
		transJson[e] = [entryJson[e], webpackHotMiddlewareScript]
	}
	module.exports = transJson
} else {
	module.exports = entryJson
}