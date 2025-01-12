import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
} from "../controllers/users.controllers.js";

const router = express.Router();

// To create User
router.post("/register", registerUser);

// To login User
router.post("/login", loginUser);

// To logout User
router.get("/logout", logoutUser);

// To refresh token
router.post("/refreshtoken", refreshToken);

export default router;
