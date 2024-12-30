import Student from "../models/student.model.js";
import Course from "../models/course.model.js";
import mongoose from "mongoose";


// To add Student
export const addStudent = async (req, res) => {
  const { fullname, email, enrolledCourse } = req.body;

  if (!fullname || !email) {
    res.status(400).json({
      message: "Name and email is required",
    });
    return;
  }
  const student = await Student.create({
    fullname,
    email,
    enrolledCourse,
  });

  const course = await Course.findByIdAndUpdate(enrolledCourse, {
    $push: { enrolledStudents: student._id },
  });

  res.status(200).json({
    message: "Student added successfully",
  });
};

// To get Student

export const getStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const student = await Student.findById(id).populate("enrolledCourse");

  if (!student) {
    res.status(404).json({
      message: "no student found!",
    });
    return;
  }

  res.status(200).json({
    message: "Student =>",
    student,
  });
};