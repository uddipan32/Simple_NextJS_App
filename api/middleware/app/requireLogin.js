const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, keys.jwtSecret, (err, user) => {

    if (err) return res.status(401).send({ error: "You must log in!" });

    req.user = user.user;

    next();
  });
};
