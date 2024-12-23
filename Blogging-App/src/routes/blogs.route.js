import express from "express";

import {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  deleteSingleBlog,
  deleteSingleBlog,
  editSingleBlog,
} from "../controllers/blogs.controllers.js";

const router = express.Router();

// To post blog
router.post("/blog", addBlog);

// To get all blogs
router.get("/blogs", getAllBlogs);

// To get single blog
router.get("/blog/:id", getSingleBlog);

// To delete single blog
router.delete("/blog/:id", deleteSingleBlog);

// To edit single blog
router.put("/blog/:id", editSingleBlog);

export default router;
