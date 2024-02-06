const express = require("express");
const app = express();
require("dotenv").config();

const handleConnectToDatabase =  require("./db/connection.db");

const PORT = process.env.PORT || 3001;

handleConnectToDatabase(process.env.MONGODB_URL).then(()=>{
 console.log("Connected to MongoDB successfully");
})

app.get("/", (req, res)=> {
 return res.send("Hello World!");
})

app.listen(PORT, ()=>{
 console.log(`Server running on Port ${PORT}`);
})
