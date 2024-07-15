const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "output.txt");
const content = "This is the content to be written to the file.";

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});
