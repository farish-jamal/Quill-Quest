const express = require("express");
const {
  handleCreateComment,
  getCommentOfSpecificPost,
} = require("../../controllers/v1/comment.controllers");
const route = express.Router();

route.post("/:id", handleCreateComment);
route.get("/:id", getCommentOfSpecificPost);

module.exports = route;
