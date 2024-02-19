const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  bannerImage: {
    type: String,
    required: true,
    default:
      "https://media.istockphoto.com/id/1147544810/vector/no-thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=2-ScbybM7bUYw-nptQXyKKjwRHKQZ9fEIwoWmZG9Zyg=",
  },
  readTime: {
    type: String,
    required: true,
  },
  totalViews: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: String,
    default: Date.now().toString(),
  },
});

const Blogs = mongoose.model("Blogs", blogSchema);
module.exports = Blogs;
