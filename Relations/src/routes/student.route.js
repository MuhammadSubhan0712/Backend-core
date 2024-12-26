import express from "express";
import {addStudent , getStudent} from "../controllers/student.controllers.js";


const router = express.Router();


// To add Student
router.post("/student" , addStudent);

// To get Student
router.get("/student/:id" , getStudent);

export default router;