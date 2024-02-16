const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretID = process.env.JWT_SECRET;

function setUser(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    secretID
  );
}

function getUser(accessToken) {
  if (!accessToken) return null;
  return jwt.verify(accessToken, secretID);
}

module.exports = {
  getUser,
  setUser,
};
