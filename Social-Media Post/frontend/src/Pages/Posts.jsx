import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const Posting = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    image: null,
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("/api/posts",{
          headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
        });
        setPosts(response.data);
      } catch (error) {
        toast.error("Failed to load posts", error);
      }
    }
    fetchPost();
  },[]);
  
  const handlePostSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData= new FormData();
      formData.append("title", newPost.title)
      formData.append("image", newPost.image);

      const response = await axios.post("/api/posts", formData,{
        headers: {
          "Content-Type": "multiple/form-data",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", image: null });
      toast.success("Posted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Post failed");
    }
    finally{
      setLoading(false);
    }
  }

  // For Like Button:
  const handleLike = async (postId) => {
    try {
      await axios.post(`api/likes/${postId}` , {} , {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setPosts(posts.map(post => 
        post._id === postId ? { ...post, likes: [...post.likes, { userId: 'current-user' }] } : post
      ));
    
    } catch (error) {
      
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#333333] text-white overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-8 mt-8 text-center text-yellow-400 drop-shadow-xl">
        Post Your Content
      </h1>

      {/* Form Container */}
      <div className="bg-[#121212] p-8 rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform">
        <form className="space-y-6">
          {/* Post Title Input */}
          <div>
            <Input
              type="text"
              placeholder="Title"
              className="w-full bg-zinc-800 text-white placeholder-gray-400 focus:ring-4 focus:ring-yellow-400 focus:outline-none rounded-lg p-4 shadow-lg"
            />
          </div>

          {/* Post Image Input */}
          <div>
            <Input
              type="file"
              className="w-full bg-zinc-800 text-white placeholder-gray-400 focus:ring-4 focus:ring-yellow-400 focus:outline-none rounded-lg p-4 shadow-lg"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {/* Post Button */}
          <Button className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 text-gray-900 font-bold py-4 rounded-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-transform">
            Post
          </Button>
        </form>
      </div>

      {/* Social Media Post Section */}
      <div className="mt-16 w-full max-w-4xl space-y-8">
        {/* Example Post */}
        <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qCHwikLFLLTUwZEBjaxhvJ-li3pdEQOkhg&s"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          />
        {/* Like and Comment Buttons */}
        <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div>

        {/* Example Post */}
        <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHR_XYuOA1-pdT5SqWjYOFtLHDYAzpIoEaw&s"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          />
        {/* Like and Comment Buttons */}
        <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div>

        {/* Example Post */}
        {/* <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSk8tpNaLkHTxCTBMp9aoNCE7tG79_caViLA&s"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          /> */}
        {/* Like and Comment Buttons */}
        {/* <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div> */}

        {/* Example Post */}
        {/* <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          /> */}
        {/* Like and Comment Buttons */}
        {/* <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Posting;
