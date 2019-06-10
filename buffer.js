// javascript没有二进制数据类型，但处理像tcp流或文件流时必须使用二进制数据，因此nodejs定义了一个Buffer类，该类专门存放二进制数据

var buf = Buffer.from("zwl",'ascii');

// console.log(buf.toString());
// console.log(buf.toString("hex"));

var buf1 = Buffer.alloc(10);
// console.log("Buffer.alloc");
// console.log(buf1);

var buf2 = Buffer.allocUnsafe(10);
// console.log("Buffer.allocUnsafe");
// console.log(buf2);
buf2.fill(1);
// console.log("buf2.fill");
// console.log(buf2);

var buf3 = Buffer.from([1,2,3,11,10]);
// console.log("Buffer.from");
// console.log(buf3);

var buf4 = Buffer.alloc(256),
    len = buf4.write("http://www.baidu.com");
console.log("写入的字节数"+len);
// 以指定编码格式输出
console.log(buf4.toString("base64"));
// 输出为json格式
console.log(buf4.toJSON());