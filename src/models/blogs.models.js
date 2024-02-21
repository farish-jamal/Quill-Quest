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
    default: "1708515810222 - no-image.jpg",
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
