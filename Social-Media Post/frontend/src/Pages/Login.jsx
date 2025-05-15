import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await axios.post("/api/login", formData);
      console.log(response);
      toast.success("Login successful!");
      navigate("/post");
    } catch (error) {
      toast.error(error.response?.data?.message || "!Login failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#333333]">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-3 text-center text-yellow-400 drop-shadow-md">
        Login
      </h1>

      {/* Form Container */}
      <div className="bg-[#121212] p-6 rounded-lg shadow-xl w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              required
            />
          </div>

          {/* Sign-Up Button */}
          <Button className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform">
            Login
          </Button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="underline text-yellow-400 hover:text-green-400 transition-colors">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
