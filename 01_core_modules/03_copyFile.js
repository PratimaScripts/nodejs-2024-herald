const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "example.txt");
const destinationPath = path.join(__dirname, "copy_example.txt");

fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
        console.error("Error copying file:", err);
        return;
    }
    console.log("File copied successfully");
});
