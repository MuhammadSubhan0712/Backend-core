import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { userId, title, content } = req.body;

  if (!userId || !title || !content) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  try {
    const newPost = await Post.create({ userId, title, content });

    res.status(200).json({
      message: "Post created Sucessfully",
      post: newPost,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error while creating post",
      error,
    });
  }
};
