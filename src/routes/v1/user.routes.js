const express = require("express");
const multer = require("multer");
const {
  handleCreateUser,
  handleUserToLoginUser,
  handleGetSpecificUser,
  handleEditUserDetails,
} = require("../../controllers/v1/user.controllers");
const { storage } = require("../../services/multer.service");
const route = express.Router();

const upload = multer({ storage: storage });

route.post("/register", upload.single("profilePicture"), handleCreateUser);
route.post("/login", handleUserToLoginUser);
route.get("/:id", handleGetSpecificUser);
route.post("/edit/:id", upload.single("profilePicture"), handleEditUserDetails);

module.exports = route;
