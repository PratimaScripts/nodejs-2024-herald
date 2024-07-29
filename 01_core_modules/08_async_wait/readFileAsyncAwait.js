const fs = require("fs").promises;

async function readFile() {
  try {
    console.log("Start");
    const data = await fs.readFile("data.json", "utf8");
    console.log("process this line before the file loads...");

    console.log("File contents:", data);
    console.log("File contents:", JSON.parse(data));
  } catch (err) {
    console.error("Error reading file:", err);
  }
  console.log("END");
}

readFile();
