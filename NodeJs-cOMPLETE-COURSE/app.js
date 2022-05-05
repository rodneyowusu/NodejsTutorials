//Creating A Server
const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the Middleware");
  next(); //Allows request to move to the next middleware.
});

app.use((req, res, next) => {
  console.log("In the second Middleware");
  res.send("Hello From Express");
});

//app becomes a valid request handler
// const server = http.createServer(app);
// server.listen(3000);

//Express way for trhe create server
app.listen(3000);
