const express = require("express");
const app = express();
require("dotenv").config();

const userRoute = require("./src/routes/v1/user.routes");
const blogRoute = require("./src/routes/v1/blogs.routes");

const handleConnectToDatabase =  require("./src/db/connection.db");

const PORT = process.env.PORT || 3001;

app.use(express.json());

handleConnectToDatabase(process.env.MONGODB_URL).then(()=>{
 console.log("Connected to MongoDB successfully");
})

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, ()=>{
 console.log(`Server running on Port ${PORT}`);
})
