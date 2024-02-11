const Blogs = require("../../models/blogs.models");

async function handleCreateBlogs(req, res) {
 const {title, content, category, bannerImage, author} = req.body;
  try {
    const blog = await Blogs.create({
      title,
      content,
      category,
      author,
      bannerImage,
    });
    return res.status(201).json(blog);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleCreateBlogs,
};
