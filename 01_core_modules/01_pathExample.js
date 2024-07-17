// Create a script that constructs a file path using the path module.
const path = require("path");

const directory = "documents";
const fileName = "file.txt";

const fullPath = path.join(__dirname, directory, fileName);
console.log("Full path:", fullPath);
