const mongoose = require("mongoose");

async function handleConnectToDatabase(url) {
  return mongoose.connect(url);
  // Database connection
}

module.exports = handleConnectToDatabase;
