// include the http module of node
const http = require('http')

// declare the hostname and port for the server to run
const hostname = '127.0.0.1'
const port = 8000

// create the server here, createServer function takes a function, that will send responses to the client
const server = http.createServer(
	function (req, res) {
		// req object contains info about the request that the client made
		// res object is the response that is sent to the client by the server
		res.statusCode = 200		// set status code
		res.setHeader('Content-Type', 'text/html') 		// set a header
		res.write('<h1>Hello World</h1>') 			// write the content for the response
		res.end() 							// end the response
	}
)

// start the server
server.listen(port, hostname, function () {
	console.log(`Server running at http://${hostname}:${port}/`)
})