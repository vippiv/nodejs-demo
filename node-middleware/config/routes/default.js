const addUser = require('../../middleware/addUser')

router.get('/', addUser, (req, res, next) => {
	axios.all([
		axios.get('/api/carous'),
		axios.get('/api/cars.top10', {
			params: {
				page: req.query.page || 1
			}
		})
	]).then(axios.spread((res1, res2) => {
		config.throwError(next, res1, res2)
		let page =req.query.page || 1
		res.render('default/index', {
			title: config.title('首页'),
			keywords: config.keywords,
			descrption: config.descrption,
			menuNav: 0,
			carList: res1.data.data,
			top10: res2.data.data.slice((page-1)*3, page*3)
		})
	})).catch(e => {
		config.renderError(req, res, e)
	})
})

// get请求
router.get('/user/role', (req, res, next) => {
	axios.get(config.origin + '/api/user/role', config.axiosHeaders(req, {
		params: { role: req.query.role }
	})).then(res1 => {
		res.send(res1.data)
	}).catch(e => {
		config.sendError(res, e)
	})
})

// post请求
router.post('/user/sendRequest', (req, res, next) => {
	axois.post(config.origin + '/api/user/sendRequest', {
		userId: req.body.userID || null,
		requestID: JSON.parse(req.body.requestID) || null
	}, config.axiosHeaders(req)).then((res2) => {
		res.send(res2.data)
	}).catch((e) => {
		config.sendError(res, e)
	})
})