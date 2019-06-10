var Emitter = require("events").EventEmitter;
var emitter = new Emitter();
emitter.on("en", function (args) {
    console.log("EventEmitter是一个类，必须生成实例才能调用");
    console.log(args);
});
emitter.emit("en","传参");