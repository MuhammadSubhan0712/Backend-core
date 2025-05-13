import Post from "../models/post.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary configuration
cloudinary.config({
  cloud_name : process.env.CLOUD_NAME,
  api_key : process.env.API_KEY,
  api_secret : process.env.API_SECRET,
});

export const createPost = async (req, res) => {
  const { userId, title, image } = req.body;

  if (!userId || !title || !image) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  try {
    const newPost = await Post.create({ userId, title, image:uploadResult.url });
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

// To upload image
const uploadImageToCloudinary = async (localpath) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath);
    }
    return uploadResult.url;
  } catch (error) {
    console.log("Error Occured", error);
    res.status(400).json({
      message: "Error Occured ==>",
      error,
    });
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath);
    }
    return null;
  }
};
export const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No image file uploaded",
    });
  }

  try {
    const uploadResult = await uploadImageToCloudinary(req.file.path);

    if (!uploadResult) {
      return res.status(500).json({
        message: "Error occured while uploading image",
      });
    }
    res.json({
      message: "Image Uploaded Successfully",
      url: uploadResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Occured while uploading image" });
  }
};