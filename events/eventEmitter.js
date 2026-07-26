const EventEmitter = require("events");

class AppEvent extends EventEmitter {}

module.exports = new AppEvent();