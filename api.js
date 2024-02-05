const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World, This is my Code! & I am using  NodeJS</h1>');
  } else { 
     res.statusCode =404;
     res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Page not found!</h1>');
  }
  })
  server.listen(5000)
