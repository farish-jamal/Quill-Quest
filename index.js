const express = require("express");
const app = express();
require("dotenv").config();

const userRoute = require("./src/routes/v1/user.routes");

const handleConnectToDatabase =  require("./src/db/connection.db");

const PORT = process.env.PORT || 3001;

handleConnectToDatabase(process.env.MONGODB_URL).then(()=>{
 console.log("Connected to MongoDB successfully");
})

app.use("/user", userRoute);

app.listen(PORT, ()=>{
 console.log(`Server running on Port ${PORT}`);
})
