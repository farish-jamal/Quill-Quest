const express = require("express");
const multer = require("multer");
const { storage } = require("../../services/multer.service");
const {
  handleCreateBlogs,
  handleGetAllBlogs,
  getSpecificBlog,
  getSpecificUserBlog,
  handleUpdateBlog,
  handleDeleteBlog,
} = require("../../controllers/v1/blogs.controllers");

const route = express.Router();
const upload = multer({ storage: storage });

route.post("/create", upload.single("bannerImage"), handleCreateBlogs);
route.get("/", handleGetAllBlogs);
route.get("/:id", getSpecificBlog);
route.get("/user/:id", getSpecificUserBlog);
route.post("/:id", upload.single("bannerImage"), handleUpdateBlog);
route.get("/delete/:id", handleDeleteBlog);

module.exports = route;
