import express from "express";

import { createPost } from "../controllers/post.controllers.js";
import { likePost } from "../controllers/like.controllers.js";
import { commentPost } from "../controllers/comment.controllers.js";

const router = express.Router();

// To create Post
router.post("/post", createPost);

// To Like Post
router.post("/like", likePost);

// To comment Post
router.post("/comment", commentPost);

export default router;
