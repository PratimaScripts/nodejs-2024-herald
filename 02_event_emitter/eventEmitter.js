const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit("greet", "Alice");

// API Documnetation: https://nodejs.org/api/events.html
// Event Emitter: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
// Event Loop : https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick