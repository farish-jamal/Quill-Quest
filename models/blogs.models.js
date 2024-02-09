const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
 title:{
  type: String,
  required: true
 },
 author:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Users",
  required: true
 },
 content:{
  type: String,
  required: true
 },
 category:{
  type: String,
  required: true
 },
 comments:[{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Comments",
 }],
 bannerImage:{
  type: String,
  required: true
 },
 totalViews:{
  type: Number,
  required: true
 },
 createdAt: {
  type: String,
  default: Date.now()
 }

});

const Blogs = mongoose.model("Blogs", blogSchema);
module.exports = Blogs; 