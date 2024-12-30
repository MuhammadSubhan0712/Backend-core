import express from "express";
import {
  addStudent,
  getStudent,
  getAllStudents,
  deleteStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

// To add Student
router.post("/addstudent", addStudent);

// To get Student
router.get("/student/:id", getStudent);

// To get All Students
router.get("/students", getAllStudents);

// To delete Student
router.delete("/student/:id", deleteStudent);
export default router;
