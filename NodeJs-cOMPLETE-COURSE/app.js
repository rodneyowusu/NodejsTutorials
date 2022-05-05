//Creating A Server
const http = require("http");
const routes = require("./routes");
// http.createServer(rqListener)
//OR

const server = http.createServer(routes.handler);

server.listen(3000);
