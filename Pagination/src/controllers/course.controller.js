import Course from "../models/course.model.js";

// To create course
export const addCourse = async (req, res) => {
  const { name, duration } = req.body;

  if (!name) {
    res.status(400).json({
      message: "Course name is required ",
    });
    return;
  }

  const course = await Course.create({ name, duration });
  res.status(200).json({
    message: " Course created Successfully",
  });
};
// To get course info
export const getCourse = async (req, res) => {
  const course = await Course.find({}).populate("enrolledStudents");
  res.json(course);
};