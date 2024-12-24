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
export const registerUser = async (req, res) => {
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

//  To login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "You must enter email & password",
    });
    return;
  }

  const user = await Users.findOne({ email });

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
    return;
  }

  //   Cookies
  res.cookie("refreshToken", refreshToken, { http: true, secure: false });
  res.status(200).json({
    message: "User LoggedIn Successfully",
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
    data: user,
  });
};

// To logout user
export const logoutUser = async (req, res) => {
  res.clearCookie("refreshToken");
  res.json({
    message: "User Logout Successfully",
  });
};

// To refresh token
export const refreshTokens = async (req, res) => {
  const refreshToken = req.cookie.refreshToken || req.body.refreshToken;
  if (!refreshToken) {
    res.status(401).json({
      message: "!No Refresh Token Found!",
    });
    return;
  }

  const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);

  const user = await Users.findOne({ email: decodedToken.email });

  if (!user) {
    res.status(404).json({
      message: "Invalid Token",
    });
    return;
  }

  const generateToken = generateAcessToken(user);
  res.json({
    message: "Access Token Generated",
    accessToken: generateToken,
  });
  res.json({ decodedToken });
};
