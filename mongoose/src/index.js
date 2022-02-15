const express = require("express");

const { port } = require("./config");
const loaders = require("./loaders");
const server = express();

loaders.init(server);
server.listen(port, () => {});