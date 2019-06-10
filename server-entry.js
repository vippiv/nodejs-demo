var server = require("./server-advance");
var router = require("./route");

server.start(router.route);