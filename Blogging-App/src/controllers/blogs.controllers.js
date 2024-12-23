import Blogs from "../models/blogs.model.js";


const addBlog = async (req , res) => {
   const { title , description , postedby } = req.body;

   if (!title || !description || !postedby) {
    res.status(400).json({
        message:"All fields are required",
    });
    return
   }
   
}