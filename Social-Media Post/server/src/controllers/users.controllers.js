import mongoose from "mongoose";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// to generate Access Token
const generateAcessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "6h",
  });
};

// to generate refresh Token
const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
    expiresIn: "7d",
  });
};

// To register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({
      message: "All fields are required",
    });
    return;
  }

  try {
    const Existence = await User.findOne({ email });

    if (Existence) {
      res.status(400).json({
        message: " User Already exist",
      });
    }

    const Newuser = await User.create({ fullname, email, password });
    res.status(200).json({
      message: "User created Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error,
    });
  }
};

// To login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "You must enter email & password",
    });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({
        message: "!No User found!",
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Incorrect Password",
      });
      return;
    }
    // Cookies
    res.cookie("refreshToken", generateRefreshToken, {
      http: true,
      secure: false,
    });
    res.status(200).json({
      message: "User LoggedIn Successfully",
      accessToken: generateAcessToken(user),
      refreshToken: generateRefreshToken(user),
      data: user,
    });
  } catch (error) {
    console.log("Error login user", error);
    res.status(400).json({ message: "Error login user", error });
  }
};

// To logout User
const logoutUser = async (req, res) => {
  res.clearCookie("refreshToken");
  res.json({
    message: "User logout Successfully",
  });
};

// To refresh Token
const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!refreshToken) {
    res.status(401).json({
      message: "!No refresh Token!",
    });
    return;
  }

  try {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_JWT_SECRET
    );
    const user = await User.findOne({ email: decodedToken.email });

    if (!user) {
      res.status(404).json({
        message: "Invalid Token",
      });
      return;
    }

    const generateToken = generateAcessToken(user);
    res.json({
      message: "Access Token generated successfully",
      accessToken: generateToken,
    });
    res.json({ decodedToken });
  } catch (error) {
    res.json({ message: "Error generating access token" }, error);
    console.log("Error generating access token", error);
  }
};

export { registerUser, loginUser, logoutUser, refreshToken };
