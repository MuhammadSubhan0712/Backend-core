import express from "express";

import { createPost } from "../controllers/post.controllers.js";

const router = express.Router();

// To create Post
router.post("/post", createPost);

export default router;
