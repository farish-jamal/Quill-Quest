const express = require("express");
const { checkAuth } = require("../../controllers/v1/getUser.controllers");

const route = express.Router();

route.post("/", checkAuth);

module.exports = route;
