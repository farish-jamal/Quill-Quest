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

function getUser(user) {
  if (!token) return null;
  return jwt.verify(token, secretID);
}

module.exports = {
  getUser,
  setUser,
};
