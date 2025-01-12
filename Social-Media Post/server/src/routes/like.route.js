import express from "express";

import { likePost } from "../controllers/like.controllers.js";

const router = express.Router();

// To Like Post
router.post("/like", likePost);

export default router;
