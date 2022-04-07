const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send("Usuario y contraseña son incorrectos");
  if (user.password != req.body.password)
    return res.status(400).send("Usuario y contraseña son incorrectos");

  const jwToken = user.generateJWT();
  res.status(200).send({ jwToken });
});

module.exports = router;
