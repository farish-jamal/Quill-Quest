const express = require("express");
const { handleCreateBlogs } = require("../../controllers/v1/blogs.controllers");
const route = express.Router();

route.post("/create", handleCreateBlogs);

module.exports = route;
