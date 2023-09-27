// Import the 'events' module
const EventEmitter = require('events');

// Create a custom event emitter
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('myEvent', (arg) => {
  
  console.log('Custom event received with argument:', arg);
});

// Emit the custom event
myEmitter.emit('myEvent', 'Hello from EventEmitter!');
