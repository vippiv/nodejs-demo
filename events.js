var events = require("events");
var eventEmiter = new events.EventEmitter();

eventEmiter.on("eventName", eventHandler);

function eventHandler() {
    console.log("emit event handler");
}
eventEmiter.emit("eventName");