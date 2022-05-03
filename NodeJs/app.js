//Creating A Server
const http = require("http");
// http.createServer(rqListener)
// //OR

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit()
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Owusu</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
