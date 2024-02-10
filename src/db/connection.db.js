const mongoose = require("mongoose");

async function handleConnectToDatabase(url){
 return mongoose.connect(url);
}

module.exports = handleConnectToDatabase;