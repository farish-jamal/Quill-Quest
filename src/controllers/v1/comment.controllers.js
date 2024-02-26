const Blogs = require("../../models/blogs.models");
const Comments = require("../../models/comments.models");

async function handleCreateComment(req, res) {
  const id = req.params.id;
  try {
    const { user, comment } = req.body;
    const result = await Comments.create({
      author: user,
      post: id,
      content: comment,
    });
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getCommentOfSpecificPost(req, res) {
  const id = req.params.id;
  try {
    const result = await Comments.find({ post: id });
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleCreateComment,
  getCommentOfSpecificPost,
};
