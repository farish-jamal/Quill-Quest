const Users = require("../../models/user.models");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

async function handleCreateUser(req, res) {
  try {
    const { username, email, password, profilePicture, description } = req.body;
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await Users.create({
      username,
      email,
      profilePicture,
      password: hashedPassword,
      description,
    });
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleUserToLoginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) return res.status(401).json({ msg: "Wrong Credentials" });
    const passwordMatched = bcrypt.compareSync(password, user.password);
    if (!passwordMatched)
      return res.status(401).json({ msg: "Wrong Credentials" });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleCreateUser,
  handleUserToLoginUser,
};
