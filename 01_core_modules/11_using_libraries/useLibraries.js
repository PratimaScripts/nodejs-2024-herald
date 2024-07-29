const fs = require("fs").promises;
const _ = require("lodash");
const moment = require("moment");

async function processData() {
  try {
    const data = await fs.readFile("data.json", "utf8");
    const parsedData = JSON.parse(data);

    const sortedData = _.sortBy(parsedData, "age");
    console.log(sortedData);
    const timestampedData = sortedData.map((item) => ({
      ...item,
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    }));

    console.log("Processed Data:", timestampedData);
  } catch (err) {
    console.error("Error reading or processing file:", err);
  }
}

processData();
