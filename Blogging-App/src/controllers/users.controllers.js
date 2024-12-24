import Users from "../models/users.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// To generate access token
const generateAcessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "6h",
  });
};

// To generate refresh token

const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
    expiresIn: "7d",
  });
};

// To register the user
const registerUser = async (req, res) => {
  const { username, fullname, email, password } = req.body;

  if (!username || !fullname || !email || !password) {
    res.status(400).json({
      message: "You must enter username , fullname email & password",
    });
    return;
  }

  const user = await Users.findOne({ email: email });
  if (user) {
    res.status(401).json({
      message: "User Already Exist",
    });
  }
  const createUser = await Users.create({
    username,
    fullname,
    email,
    password,
  });
  res.json({
    message: "User Registered Successfully",
    data: createUser,
  });
};


