const express = require("express");
const multer = require("multer");
const { storage } = require("../../services/multer.service");
const {
  handleCreateBlogs,
  handleGetAllBlogs,
} = require("../../controllers/v1/blogs.controllers");

const route = express.Router();
const upload = multer({ storage: storage });

route.post("/create", upload.single("bannerImage"), handleCreateBlogs);
route.get("/", handleGetAllBlogs);

module.exports = route;
