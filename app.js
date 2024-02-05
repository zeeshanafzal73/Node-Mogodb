const http = require("http");
const {readFileSync} = require("fs")
const homepage = readFileSync("./index.html")

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url.startsWith("/users")) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>users page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});
server.listen(5000);
