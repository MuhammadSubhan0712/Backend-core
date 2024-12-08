import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshTokens,
  uploadImage,
} from "../controllers/user.controllers.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

// To register User
router.post("/register", registerUser);

// To login User

router.post("/login", loginUser);

// To logout User

router.post("/logout", logoutUser);

// To refresh token

router.post("/refreshtoken", refreshTokens);

// To upload image

router.post("/uploadimage", upload.single("image"), uploadImage);

export default router;
