const express = require("express");
const {
  handleCreateUser,
  handleUserToLoginUser,
} = require("../../controllers/v1/user.controllers");
const route = express.Router();

route.post("/register", handleCreateUser);
route.get("/login", handleUserToLoginUser);

module.exports = route;
