import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { io } from "socket.io-client";

const Posting = () => {
  const [posts, setPosts] = useState([]);
  const [activeComments, setActiveComments] = useState({});
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

  const toggleComments = (postId) => {
    setActiveComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const addComment = async (postId, content) => {
    try {
      await axios.post(
        `/api/comments/${postId}`,
        { content },
        {
          header: { Authorization: `Bearer ${token}` },
        }
      );
      fetchPost();
    } catch (error) {
      toast.error("Failed to add comment", error);
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:5000"); // Your backend URL
    socket.on("newPost", (post) => {
      setPosts((prev) => [post, ...prev]);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white font-orbitron p-4">
      <div className="max-w-4xl mx-auto">
        {/* Create new post */}
        <div className="bg-cyberpunk-card p-6 rounded-xl border border-cyberpunk-cyan/20 mb-8">
          <h2 className="text-2xl text-cyberpunk-cyan mb-4">CREATE POST</h2>

          {/* Form Container */}
          <form onSubmit={handlePostSubmit} className="space-y-4">
            {/* Post Title Input */}
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

            {/* Post Image Input */}
            <Input
              type="file"
              onChange={(e) =>
                setNewPost({ ...newPost, image: e.target.files[0] })
              }
              className="w-full text-sm text-gray-400"
              accept="image/*"
              required
            />

            {/* Post Button */}
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink text-black">
              {loading ? "POSTING..." : "POST"}
            </Button>
          </form>
        </div>

        {/* {/* Post Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-cyberpunk-card p-6 rounded-xl border border-cyberpunk-pink/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-cyberpunk-cyan mr-3"></div>
                <div>
                  <h3 className="font-bold">
                    {post.userId?.username || "Anonymous"}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="mb-4">{post.title}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-auto rounded-lg mb-4"
                />
              )}
              <div className="flex space-x-4">
                <Button
                  onClick={() => handleLike(post._id)}
                  className="bg-transparent text-cyberpunk-cyan border border-cyberpunk-cyan hover:bg-cyberpunk-cyan/10">
                  👍 {post.likes?.length || 0}
                </Button>

                {activeComments[post._id] && (
                  <div className="mt-4">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const content = e.target.comment.value;
                        if (content) addComment(post._id, content);
                        e.target.comment.value = "";
                      }}>
                      <input
                        name="comment"
                        placeholder="Add a comment..."
                        className="w-full bg-[#333] text-white p-2 rounded border border-cyberpunk-pink/20"
                      />
                    </form>
                    <div className="mt-2 space-y-2">
                      {post.comments?.map((comment) => (
                        <div key={comment._id} className="flex items-start">
                          <span className="font-bold text-cyberpunk-cyan mr-2">
                            {comment.userId.username}:
                          </span>
                          <span>{comment.content}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <Button className="bg-transparent text-cyberpunk-pink border border-cyberpunk-pink hover:bg-cyberpunk-pink/10">
                  💬 Comment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posting;
