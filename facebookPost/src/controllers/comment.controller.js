import Comment from "../models/comment.model.js";

export const commentPost = async (req, res) => {
  const { userId, postId, content } = req.body;

  if (!userId || !postId) {
    res.status(400).json({ message: "userId and postId is required" });
    return;
  }
  try {
    const comment = await Comment.create({ userId, postId, content });
    res.status(200).json({ message: "comment added successfully" });
  } catch (error) {
    res.status(400).json({ message: "error occured" });
  }
};
