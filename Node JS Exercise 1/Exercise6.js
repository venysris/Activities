var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {
    console.log('I bark when I see strangers!!!');
}
eventEmitter.on('bark', myEventHandler);
eventEmitter.emit('bark');
