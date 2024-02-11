const Comments = require("../../models/comments.models")

async function handleCreateComment(req, res){
 try {
  const {author, content} = req.body;
  const comment = await Comments.create({
   author,
   content
  })
  return res.status(201).json(comment);
 } catch (error) {
  console.error("Error creating user:", error);
  return res.status(500).json({ error: "Internal Server Error" });
 }
}

module.exports = {
 handleCreateComment
}