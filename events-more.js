var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
    console.log("监听器listener1执行");
}
var listener2 = function () {
    console.log("监听器listener2执行");
}
// 添加监听器
eventEmitter.addListener("connection",listener1);
eventEmitter.on("connection",listener2);

// 统计监听器个数
var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + "个监听器监听连接时间。");

// 触发监听行为
eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listener1);
console.log("listeners不再受监听");

// 再次触发connection
eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + "个监听器监听连接时间");

console.log("程序执行完毕");