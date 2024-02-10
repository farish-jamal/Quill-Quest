const express = require("express");
const { handleCreateUser } = require("../../controllers/v1/user.controllers");
const route = express.Router();

route.post("/register", handleCreateUser);

module.exports = route;
