const Blogs = require("../../models/blogs.models");

async function handleCreateBlogs(req, res) {
  const { title, description, category, author } = req.body;
  try {
    const blog = await Blogs.create({
      title,
      content: description,
      category,
      author,
      bannerImage: req.file.filename,
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
