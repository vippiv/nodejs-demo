const express = require('express')
const app = express()
const port = 9527

app.get('/', (req, res) => {
	res.send('hello world')
})

app.listen(port, () => {
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
})