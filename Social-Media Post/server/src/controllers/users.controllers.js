import mongoose from "mongoose";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// To register User
export const registerUser = async (req, res) => {
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
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({
      message: "!No User found!",
    });
    return;
  }

  const isPasswordValid = await bcrypt.compare;
};
