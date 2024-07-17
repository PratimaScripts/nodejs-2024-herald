const fs = require("fs");
const EventEmitter = require("events");
const fileEmitter = new EventEmitter();

// Define an event listener
fileEmitter.on("fileRead", (data) => {
  console.log("File contents:", data);
});

// Read the file and emit an event
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  fileEmitter.emit("fileRead", data);
});
