import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshTokens,
} from "../controllers/users.controllers.js";

const router = express.Router();

// To register User
router.post("/register", registerUser);
