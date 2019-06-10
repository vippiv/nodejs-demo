function readStream() {
    var fs = require('fs'), data = "";
    var readerStream = fs.createReadStream('static/input.txt');
    readerStream.setEncoding("UTF8");
    readerStream.on("data",function (chunk) {
        data+=chunk;
    });
    readerStream.on("end",function () {
        console.log(data);
    });
    readerStream.on('error',function (err) {
        console.log(err.stack);
    });
    console.log("程序执行完毕");
}
// 读取流
// readStream();

function writeSteam() {
    var fs = require("fs");
    var data = "hello,this is write stream";
    var writeStream = fs.createWriteStream("static/output.txt");
    writeStream.write(data,"utf8");
    writeStream.end();
    writeStream.on("finish",function () {
        console.log("写入完成");
    });
    writeStream.on("error",function (err) {
        console.log(err.stack);
    });
    console.log("程序执行完毕");
}
// 写入流
// writeSteam();

function pipeStream() {
    var fs = require("fs");
    var readerStream = fs.createReadStream("static/input.txt");
    var writeStream = fs.createWriteStream("static/output.txt");
    readerStream.pipe(writerStream); // 会覆盖output.txt的内容
    console.log("程序执行完毕");
}
// 管道流
// pipeStream();

function chainStreamGzip() {
    var fs = require("fs");
    var zlib = require("zlib");
    fs.createReadStream("static/input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream('static/input.txt.gz'));
    console.log("文件压缩完成");
}
// 链式流
// chainStreamGzip();

function chainStreamGunzip() {
    var fs = require("fs");
    var zlib = require("zlib");
    fs.createReadStream("static/input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("static/input.txt"));
    console.log("解压完毕");
}
chainStreamGunzip();