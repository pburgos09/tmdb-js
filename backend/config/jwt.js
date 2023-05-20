const jwt = require("jsonwebtoken");

const SECRET = "TMDB";

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => jwt.verify(token, SECRET);
module.exports = { generateToken, validateToken, SECRET };
