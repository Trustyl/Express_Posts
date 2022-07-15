const express = require("express");
const path = require("path");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);



server.use(express.static(path.join(__dirname, "../Public")));

server.listen(3000, () => console.log("server running on port 3000"));