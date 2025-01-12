import jwt from "jsonwebtoken";

const authenticateUser = async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(404).json({
      message: "!No token Found!",
    });
    return;
  }
  jwt.verify(token, process.env.ACCESS_JWT_SECRET, (error, user) => {
    if (error) {
      res.status(403).json({
        message: "Invalid Token",
      });
      return;
    }
    req.user = user;
    next();
  });
};
