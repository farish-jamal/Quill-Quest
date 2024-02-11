const express = require("express");
const { handleCreateComment } = require("../../controllers/v1/comment.controllers");
const route = express.Router();

route.post("/", handleCreateComment);

module.exports = route;