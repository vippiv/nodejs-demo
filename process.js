process.on("exit",function (code) {
    setTimeout(function () {
        console.log("该代码永远不会执行");
    });
    console.log("退出码为："+code);
});
console.log("程序执行结束");

//stdout标准输出流
process.stdout.write("hello world!"+"\n");

// 通过参数读取
process.argv.forEach(function (item, index, array) {
    console.log(index+"："+item);
});