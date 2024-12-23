import Blogs from "../models/blogs.model.js";


// To create a blog
export const addBlog = async (req , res) => {
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

// To get all blogs
export const getAllBlogs = async (req , res) => {
    try {
        const blog = await Blogs.find({});
        res.status(200).json({
            message: "All Blogs ==>",
            blog,
        });
    } catch (error) {
        res.status(400).json({message:"Error fetching all blogs", error});
    }
};

// To get single blog
// To delete single blog
// To edit single blog


