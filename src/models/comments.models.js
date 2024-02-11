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
  default: Date.now().toString()
 }
})

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;