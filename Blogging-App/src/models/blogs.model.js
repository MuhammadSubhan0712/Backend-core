const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true | "title is required"],
    },
    description:{
        type:String,
        required:[true | "description is required"],
    },
    postedBy:{
        type:String,
        required:[true | "author is required"],
    },
},
{
    timestamps: true
}
);

export default mongoose.model("Blogs",blogSchema);