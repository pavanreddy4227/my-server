const http = require('http')  // require built-in Node.js http package

// Use hosting values if available, otherwise default 
const hostname = '0.0.0.0' // allow remote access
const port = process.env.PORT || 3002

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Hello...\n')
  res.write('I pavan \n')
  res.end('Hello World! This is text - we can respond with HTML, JSON, and more :)\n')
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
  console.log(`In dev, try http://localhost:${port}/`)
})
