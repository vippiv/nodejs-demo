const express = require('express')
const path = require('path')
const app = express()
const port = 9527

// app.use(express.static('assets')) // http://localhost:9527/images/mavel.jpg 这么写可以直接访问

// app.use('/static', express.static('assets')) // http://localhost:9527/static/images/mavel.jpg 创建了一个虚拟目录

app.use('/static', express.static(path.join(__dirname, 'assets'))) // 这样写更安全

app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/product', (req, res) => {
	res.send('product')
})

app.listen(port, () => {
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
})