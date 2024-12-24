import Users from "../models/users.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// To generate access token
const generateAcessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "6h",
  });
};
