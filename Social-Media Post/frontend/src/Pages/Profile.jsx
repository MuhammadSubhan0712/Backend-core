import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "../context/AuthContext";
import axios from 'axios';
import { toast } from 'sonner';
const Profile = () => {
    const { user, logout } = useAuth();
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
    });
    const [posts, setPosts] = useState([]);

    useEffect(() =>{ 
        if (user) {
            setFormData({
                username: user.username,
                email: user.email,
                bio: user.bio || '',
            });
            fetchUserPosts();
        }
    },[]);

    const fetchUserPosts = async () => {
        try {
            const response = await axios.get(`/api/posts/user/${user._id}`);
            setPosts(response.data);
        } catch (error) {
            toast.error("Failed to fetch posts", error);
        }
    };
    const handleUpdate = async (event) => {
       event.preventDefault();
       try {
        await axios.put("/api/users", formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        alert("Profile Updated!");
       } catch (error) {
        toast.error("Updated failed!", error);
       }
    };
  return (
    <>
    <div className='min-h-screen bg-cyberpunk-dark text-white font-oribtron p-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center justify-between mb-8'>
           <div className='flex items-center'>
            <div className='w-20 h-20 rounded-full bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink mr-4'>
                <h1 className="text-3xl font-bold">
                    {user?.username}
                </h1>
            </div>
            <Button
            onClick={logout}
            className='bg-cyberpunk-pink text-black hover:bg-cyberpunk-pink/80'>
                Logout
            </Button>
           </div>

           <div className='bg-cyberpunk-card p-6 rounded-xl border border-cyberpunk-cyan/20 mb-8'>
            <h2 className='text-2xl text-cyberpunk-cyan mb-4'>
                EDIT PROFILE
            </h2>
            <form onSubmit={handleUpdate} className='space-y-4'>
                <Input 
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})} 
                className='bg-[#222] border-cyberpunk-cyan/30'
                />
                
                <Input 
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                className='bg-[#222] border-cyberpunk-cyan/30'
                />

                <textarea
              placeholder="Bio"
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              className="w-full bg-[#222] text-white p-3 rounded border border-cyberpunk-cyan/30 min-h-[100px]"
            />

            </form>
           </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Profile