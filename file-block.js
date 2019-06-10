var fs = require("fs");
var data = fs.readFileSync("static/input.txt");
console.log(data.toString());
console.log("over");