const http = require('http')
const randomization = require('./js/randomization.js')

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/javascript')
	res.write('<h1>Hello World</h1>')
	res.end()
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
