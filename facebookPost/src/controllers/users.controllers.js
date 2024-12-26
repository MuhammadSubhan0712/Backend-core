import mongoose from "mongoose";

import User from "../models/users.model.js";

export const registerUser = async (req ,res ) => {
    const {fullname , email , password} = req.body;

    if (!fullname || !email || !password) {
        res.status(400).json({
            message: "All fields are required",
        })
        return;
    }
    
    try {
        
        const Existence = await User.findOne({email});

        if (Existence) {
            res.status(400).json({
                message:" User Already exist",
            })
        }

        const Newuser = await User.create({ fullname , email , password });
        res.status(200).json({
            message: "User created Successfully",
        });    
    } 
    catch (error) {
        res.status(400).json({
            message:"Error creating user",
            error,
        })
    }
    
}

