const { getReadTime } = require("../../helper/getReadTime");
const Blogs = require("../../models/blogs.models");

async function handleCreateBlogs(req, res) {
  const { title, description, category, author } = req.body;
  const readTime = getReadTime(category);
  try {
    const blog = await Blogs.create({
      title,
      content: description,
      category,
      author,
      readTime,
      bannerImage: req.file.filename,
    });
    return res.status(201).json(blog);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleGetAllBlogs(req, res) {
  try {
    const result = await Blogs.find({});
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSpecificBlog(req, res) {
  const id = req.params.id;
  try {
    const result = await Blogs.findOneAndUpdate(
      { _id: id },
      { $inc: { totalViews: 1 } },
      { new: true }
    );
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Error while finding blog", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSpecificUserBlog(req, res) {
  const id = req.params.id;
  try {
    const result = await Blogs.find({ author: id });
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Error while finding blog", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleUpdateBlog(req, res) {
  const id = req.params.id;
  const { title, content, category } = req.body;
  try {
    const updateFields = {};
    if (title) updateFields.title = title;
    if (content) updateFields.content = content;
    if (category) updateFields.category = category;
    if (req.file) updateFields.bannerImage = req.file.filename;
    const result = await Blogs.findOneAndUpdate({ _id: id }, updateFields, {
      new: true,
    });
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Error while finding blog", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleDeleteBlog(req, res) {
  const id = req.params.id;
  try {
    const result = await Blogs.findOneAndDelete({ _id: id });
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Error while finding blog", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleCreateBlogs,
  handleGetAllBlogs,
  getSpecificBlog,
  getSpecificUserBlog,
  handleUpdateBlog,
  handleDeleteBlog,
};
