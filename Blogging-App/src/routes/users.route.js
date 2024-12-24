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

// To login User
router.post("/login", loginUser);

// To logout User
router.post("/logout", logoutUser);

// To refresh token
router.post("/refreshtoken", refreshTokens);

export default router;
