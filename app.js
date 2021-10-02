const express = require("express");
const config = require("config");
const app = express();
const mongoose = require("mongoose");
const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect();
  } catch (e) {
    console.log("Server Error ", e.message);
    process.exit(1);
  }
}

app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
