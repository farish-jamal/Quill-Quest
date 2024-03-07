const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
    default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  description: {
    type: String,
    required: true,
  },
  likedPost: {
    type: Array,
  },
  role: {
    type: String,
    required: true,
    default: "NOMRAL",
  },
  createdAt: {
    type: String,
    default: Date.now().toString(),
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
