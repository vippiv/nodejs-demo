const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const localOptions = require('./build/localOptions')
const config = require('./config/config')
const bodyParser = require('body-parser')
const auth = require('./middleware/auth')
const log4js = require('./config/log4js')

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
const isDev = process.env.NODE_ENV === 'dev'
const app = express
const port = config.port

// 设置模板类型
app.set('view engine', 'pug')

// 设置模板文件路劲
if (isDev) {
	// 设置模板文件路劲
	app.set('Views', path.resolve(__dirname, 'src/Views'))
} else {
	app.set('Views', path.resolve(__dirname, 'dist/Views'))
}

// app.locals定义的键值对能再模板中直接访问
app.locals.env = process.env.NODE_ENV || 'dev'
app.locals.reload = true

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))

if (isDev) {
	const webpack = require('webpack')
	const webpackDevMiddleware = require('webpack-dev-middleware')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const webpackDevConfig = require('./build/webpack.dev.config.js')

	const compiler = webpack(webpackDevConfig)

	// 热插拔
	app.use(webpackDevMiddleware(compiler, {
		publicPath: wenbacpDevConfig.output.publicPath,
		noInfo: true,
		stats: 'errors-only'
	}))
	app.use(webpackHotMiddleware(compiler, {
		heartbeat: 1000,
		noInfo: true
	}))

	// 不能热插拔的往下执行
	const reload = require('reload')
	const http = require('http')
	const server = http.createServer(app)
	// reload(server, app)
	reload(app)
	server.listen(port, () => {
		console.log(`App 【dev】 is now running on port ${port} !`)
	})

	// 静态目录设置必须有，开发环境读取的vendor.js不是内存文件
	// 静态目录必须放在reload后面，避免页面引入reload.js报错
	app.use(express.static(path.join(config.root, 'src')))
	app.use('/', require(path.join(config.configRoot, '/routes')))
} else {
	// 线上环境不需要监听，只需开启node服务即可
	// 设置node的静态文件目录
	app.use(express.static(path.join(config.root, 'dist')))
	app.use('/', require(path.join(config.configRoot, '/routes')))

	app.listen(port, () => {
		console.log(`App 【production】 is now running on port ${port} !`)
	})
}

// 捕获404错误，传给error路由
app.use('*', auth, (req, res, next) => {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

// 捕获error，跳转至error页面
app.use((err, req,res, next) => {
	const sc = err.status || 500
	if (err.status === 405) {
		res.redirect(config.cndesignOrigin + '/Home/GuideAuthentication')
		return
	}
	res.status(sc)

	// 此处需写入日志
	log4js.error(`\r\n Status ${sc} \r\n Message ${err.message} \r\n Href: ${localOptions.baseUrl} ${req.originalUrl} \r\n User-agent: ${req.header['User-agent']}`)

	res.render('Error/404', {
		error: err,
		status: sc,
		message: err.message,
		userInfo: req.userInfo_ || {hasLogin: false}
	})
})