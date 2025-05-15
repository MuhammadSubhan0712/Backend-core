import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/register", formData);
      console.log(response);
      toast.success("Account created!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyberpunk-dark font-orbitron">
      {/* Heading */}
      <div className="text-center mb-8">
 <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink">
        JOIN THE NETWORK
      </h1>
      <p className="text-cyberpunk-cyan">Create your digital identity</p>
      </div>
     
    
      {/* Form Container */}
      <div className="bg-[#121212] p-6 rounded-lg shadow-xl w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <Input
              type="text"
              placeholder="Username"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <Input
              type="email"
              value={formData.email}
              placeholder="Email"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <Input
              type="password"
              value={formData.password}
              placeholder="Password"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
              onChange={handleChange}
            />
          </div>

          {/* Sign-Up Button */}
          <Button className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform">
            Sign Up
          </Button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline text-yellow-400 hover:text-green-400 transition-colors">
            Login
          </Link>
        </p>
      </div>

      {/* Decorative Stuff */}
      <div className="mt-8 flex space-x-4">
        <span className="h-4 w-4 bg-green-400 rounded-full animate-pulse"></span>
        <span className="h-4 w-4 bg-yellow-400 rounded-full animate-pulse delay-75"></span>
        <span className="h-4 w-4 bg-green-600 rounded-full animate-pulse delay-150"></span>
      </div>
    </div>
  );
};

export default Register;
