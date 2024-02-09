const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
 username: {
  type: String,
  required: true,
  unique: true
 },
 email:{
  type: String,
  required: true,
  unique: true
 },
 password:{
  type: String,
  required: true,
 },
 profilePicture:{
  type: String,
  required: true,
 },
 createdAt: {
  type: String,
  default: Date.now()
 }

}, {timestamps: true});

const Users = mongoose.model("Users", userSchema);
module.exports = Users; 