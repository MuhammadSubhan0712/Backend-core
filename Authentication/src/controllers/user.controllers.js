import User from "../models/user.models.js"
import jwt from "jsonwebtoken"


// To generate access token
const generateAccessToken = (user) =>{
    return jwt.sign({email: user.email} , process.env.ACCESS_JWT_SECRET , {expiresIn: '6h'});   
}


// To generate refresh token

const generateRefreshToken = (user) =>{
    return jwt.sign({email: user.email} , process.env.REFRESH_JWT_SECRET , {expiresIn: '7d'});   
}

// To register the User
const registerUser = (user) =>{
    
}
// To Login User
const loginUser = (user) =>{
    
}
// To logout User
const logoutUser = (user) =>{
    
}
