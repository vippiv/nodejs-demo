var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello nodejs, haha");
}).listen(8081);

console.log("server runing an http://127.0.0.1:8081");