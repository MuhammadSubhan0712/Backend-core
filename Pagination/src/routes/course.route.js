import express from "express";
import { addCourse, getCourse } from "../controllers/course.controller.js";

const router = express.Router();

// To add course
router.post("/course", addCourse);

// To get course
router.get("/courses", getCourse);

export default router;
