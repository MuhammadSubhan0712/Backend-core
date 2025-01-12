import express from "express";
import { commentPost } from "../controllers/comment.controllers.js";


const router = express.Router();

// To comment Post
router.post("/comment", commentPost);

export default router;
