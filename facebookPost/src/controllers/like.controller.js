import Like from "../models/like.model.js";

export const likePost = async (req, res) => {
  const { userId, postId } = req.body;

  try {
    const likeExistence = await Like.findOne({ userId, postId });

    if (likeExistence) {
      res.status(400).json({ message: "Post already like" });

      await Like.deleteOne({ userId, postId });
      res.status(200).json({ message: "Now unliked successfully" });
      return;
    } else {
      const like = new Like({ userId, postId });
      await like.save();
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (error) {
    res.status(400).json({ messsage: "Error liking", error });
  }
};
