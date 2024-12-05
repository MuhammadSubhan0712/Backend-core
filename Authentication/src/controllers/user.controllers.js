import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// To generate access token
const generateAccessToken = (user) => {
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

// To register the User
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "You must enter email & password",
    });
    return;
  }

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(401).json({
      message: "User Already Exist",
    });
  }

  const createUser = await User.create({
    email,
    password,
  });
  res.json({
    message: "User Registered Successfully",
    data: createUser,
  });
};

// To Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "You must enter email & password",
    });
    return;
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({
      message: "!No user found!",
    });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400).json({
      message: "Incorrect Password",
    });
  }
};

// To generate Token
const accessToken = generateAccessToken(user);
const refreshToken = generateRefreshToken(user);

// Cookies
res.cookie("refeshToken", refreshToken, { http: true, secure: false });
res.status(200).json({
  message: "User LoggedIn Successfully",
  accessToken,
  refreshToken,
  data: user,
});

export { generateAccessToken, generateRefreshToken, registerUser, loginUser };
