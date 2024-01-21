var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter= new events.EventEmitter();

// Create event Handlers
var eventScream = function(){
    console.log("scream event Triggered");
}

// Assign Function to Scream Event
eventEmitter.on('scream', eventScream);

//  Fire the Event
eventEmitter.emit('scream');