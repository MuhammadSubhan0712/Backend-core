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
        const response = await axios.get("/api/posts", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setPosts(response.data);
      } catch (error) {
        toast.error("Failed to load posts", error);
      }
    };
    fetchPost();
  }, []);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", newPost.title);
      formData.append("image", newPost.image);

      const response = await axios.post("/api/posts", formData, {
        headers: {
          "Content-Type": "multiple/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", image: null });
      toast.success("Posted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Post failed");
    } finally {
      setLoading(false);
    }
  };

  // For Like Button:
  const handleLike = async (postId) => {
    try {
      await axios.post(
        `api/likes/${postId}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts(
        posts.map((post) =>
          post._id === postId
            ? { ...post, likes: [...post.likes, { userId: "current-user" }] }
            : post
        )
      );
    } catch (error) {
      toast.error("Like action failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white font-orbitron p-4">
      <div className="max-w-4xl mx-auto">
        {/* Create new post */}
        <div className="bg-cyberpunk-card p-6 rounded-xl border border-cyberpunk-cyan/20 mb-8">
          <h2 className="text-2xl text-cyberpunk-cyan mb-4">CREATE POST</h2>

          {/* Form Container */}
          <form onSubmit={handlePostSubmit} className="space-y-4">
            {/* Post Title Input */}
            <div>
              <Input
                type="text"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                placeholder="What's happening?"
                className="w-full bg-[#222] text-white p-3 rounded border border-cyberpunk-cyan/30"
                required
              />
            </div>

            {/* Post Image Input */}
            <div>
              <Input
                type="file"
                onChange={(e) =>
                  setNewPost({ ...newPost, image: e.target.files[0] })
                }
                className="w-full text-sm text-gray-400"
                accept="image/*"
                required
              />
            </div>

            {/* Post Button */}
            <Button
            type="submit" 
            disabled={loading}
            className="bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink text-black">
              {loading ? "POSTING..." : "POST"}
            </Button>
          </form>
        </div>

        {/* Post Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post._id}
            className="bg-cyberpunk-card p-6 rounded-xl border border-cyberpunk-pink/20">
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cyberpunk-cyan mr-3">
                
              </div>
            </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Posting;
