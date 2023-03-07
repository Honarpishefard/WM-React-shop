const jwt = require("jsonwebtoken");

const authenticator = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({
      message: ["invalid token"],
    });
    try {
      let verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      console.log(verified);
      next();
    } catch {
      let errors = ex.message.splite(",").map((i) => {
        let error = item.splite(":");
        return error[(error.length = 1)];
      });
      res.status(400).json({
        message: [
          "invalid token or something else went wrong with the server",
          ...errors,
        ],
      });
    }
  }
};

module.exports = { authenticator };
