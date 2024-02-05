const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello World\n')
    }
    if (req.url === "/about"){
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('About\n')
    }
 res.end(`
 <h1>Oops! not available</h1>
 `)
})
server.listen(5000)