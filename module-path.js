var path = require("path");

console.log(path.normalize("www.baidu"));

console.log(path.join("D:","wamp"));

console.log(__dirname+"/dist");

console.log(path.resolve(__dirname+"/dist"));

console.log(path.isAbsolute(__dirname));

console.log(path.isAbsolute("dist"));

console.log(path.dirname("D:/wamp/static"));

console.log(path.basename("D:/wamp/static"));

console.log(path.extname("D:/wamp/static/img/a.jpg"));

console.log(path.parse("D:/wamp/static/img/a.jpg"));

var pathObj = {
    root : "D:/",
    dir : "D:/wamp/static/img",
    base : "a.jpg",
    ext : ".jpg",
    name : "a"
}

console.log(path.resolve(path.format(pathObj)));

console.log(path.sep);

console.log(path.delimiter);