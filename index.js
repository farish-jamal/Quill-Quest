const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./src/routes/v1/user.routes");
const blogRoute = require("./src/routes/v1/blogs.routes");
const commentRoute = require("./src/routes/v1/comment.routes");
const getUserRoute = require("./src/routes/v1/getUser.routes");

const handleConnectToDatabase = require("./src/db/connection.db");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

handleConnectToDatabase(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB successfully");
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);
app.use("/getUser", getUserRoute);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
