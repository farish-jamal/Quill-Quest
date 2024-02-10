const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
 author: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Users",
 },
 content:{
  type: String,
  required: true
 },
 createdAt: {
  type: String,
  default: Date.now()
 }
})

const Comments = require("Comments", commentSchema);
module.exports = Comments;