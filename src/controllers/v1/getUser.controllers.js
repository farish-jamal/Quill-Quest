const { getUser } = require("../../utils/auth.utils");

async function checkAuth(req, res) {
  const { accessToken } = req.body;
  if (!accessToken) return res.status(404).json({ msg: "no aceess token" });
  const user = await getUser(accessToken);
  if (!user) return res.status(401).json({ msg: "user not found" });
  return res.status(200).json(user);
}

module.exports = {
  checkAuth,
};
