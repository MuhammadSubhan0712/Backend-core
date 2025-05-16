import React, { useEffect, useState } from 'react'
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
       
    }
  return (
    <div>Profile</div>
  )
}

export default Profile