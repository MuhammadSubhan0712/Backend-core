import mongoose, { mongo }  from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true | "username is required"],
    },
    fullname:{
        type:String,
        required:[true | "full name is required"],
    },
    email:{
        type:String,
        required:[true | "email is required"],
    },
    password:{
        type:String,
        required:[true | "password is required"],
    }
});

export default mongoose.model("Users",userSchema);