import Blogs from "../models/blogs.model.js";

// To create a blog
export const addBlog = async (req, res) => {
  const { title, description, postedby } = req.body;

  if (!title || !description || !postedby) {
    res.status(400).json({
      message: "All fields are required",
    });
    return;
  }
  const blog = Blogs.create({
    title,
    description,
    postedby,
  });
  res.status(200).json({
    message: "Blogs add successfully",
  });
};

// To get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blogs.find({});
    res.status(200).json({
      message: "All Blogs ==>",
      blog,
    });
  } catch (error) {
    res.status(400).json({ message: "Error fetching all blogs", error });
  }
};

// To get single blog
export const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const singleblog = await Blogs.findbyId(id);
    if (!singleblog) {
      res.status(400).json({
        message: "No blog found",
      });
      return;
    }
    res.status(200).json({
      message: "Your single blog =>",
      singleblog,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error fetching single blog =>",
      error,
    });
  }
};
// To delete single blog
// To edit single blog
