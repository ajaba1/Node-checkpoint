import http from "http";

// create a server using http module
const server = http.createServer((request, response) => {
  console.log(request);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("<h1>Hello Node</h1>\n");
});

// create port number 3000
const port = 3000;

// listen to the server for incoming request
server.listen(port, () => {
  console.log("server runing at http://Localhost:3000/");
});
