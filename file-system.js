function readFile() {
    var fs = require("fs");
    fs.readFile("static/input.txt",function (err, data) {
        if(err){
            return console.log(err);
        }
        console.log("异步读取："+data.toString());
    });

    var data = fs.readFileSync("static/input.txt");
    console.log("同步读取："+data.toString());
}
// readFile();

function openFile() {
    var fs = require("fs");
    console.log("准备打开文件");
    fs.open("static/input.txt", "r", function (err, fd) {
        if(err){
            return console.error(err);
        }
        console.log(fd);
        console.log("文件打开成功");
    });
}
// openFile();

function fileStat() {
    var fs = require("fs");
    fs.stat("static/input.txt",function (err, stats) {
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.isBlockDevice());
        console.log(stats.isCharacterDevice());
        console.log(stats.isSymbolicLink());
        console.log(stats.isFIFO());
        console.log(stats.isSocket());
    });
}
// fileStat();

function writeFile() {
    var fs = require("fs");
    fs.writeFile("static/output.txt", "我是通过fs.writeFile方法写入的内容", function (err) {
        if(err){
            return console.error(err);
        }
        console.log("数据写入成功");
        console.log("------------我是分割线------------");
        console.log("读取写入的数据");
        fs.readFile("static/output.txt", function (err, data) {
            if(err){
                return console.error(err);
            }
            console.log("异步读取的文件数据： "+data.toString());
        });
    });
}
// writeFile();

/**
 * read方法可以精准的对字节进行操作，readFile则无法做到
 */
function viaRead() {
    var fs = require("fs");
    var buf = Buffer.alloc(1024);
    console.log("准备打开已经存在的文件");
    fs.open("static/input.txt", "r+", function (err, fd) {
        if(err){
            return console.error(err);
        }
        console.log('文件打开成功');
        console.log('准备读取文件');
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if(err){
                return console.error(err);
            }
            console.log(bytes+"个字节被读取");
            if(bytes>0 && bytes > 10){
                console.log(buf.slice(0, bytes-10).toString());
            }
        });
    });
}
viaRead();