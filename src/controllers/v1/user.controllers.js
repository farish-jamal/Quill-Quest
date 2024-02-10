const Users = require("../../models/user.models");

async function handleCreateUser(req, res){
 const { username, email, password, profilePicture, description } = req.body;
 const user = await Users.create({
   username,
   email,
   profilePicture,
   password,
   description
 });
 res.status(201).json(user);
}

module.exports = {
 handleCreateUser,
}