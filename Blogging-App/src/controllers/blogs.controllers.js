import Blogs from "../models/blogs.model.js";


// To create a blog
const addBlog = async (req , res) => {
   const { title , description , postedby } = req.body;

   if (!title || !description || !postedby) {
    res.status(400).json({
        message:"All fields are required",
    });
    return
   }
   const blog = Blogs.create({
    title , 
    description , 
    postedby,
   });
   res.status(200).json({
    message:"Blogs add successfully"
   });
}

export {addBlog}