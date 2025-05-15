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
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyberpunk-dark font-orbitron">
      <div className="text-center mb-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink">
          ACCESS GRANTED
        </h1>
        <p className="text-cyberpunk-cyan">Enter your credentials</p>
      </div>

      {/* Form Container */}
      <div className="bg-cyberpunk-card p-8 rounded-xl border border-cyberpunk-cyan/20 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <Input
              type="email"
              value={formData.email}
              placeholder="Email"
              className="w-full bg-[#222] text-white border border-cyberpunk-cyan/30 focus:border-cyberpunk-pink"
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
              className="w-full bg-[#222] text-white border border-cyberpunk-cyan/30 focus:border-cyberpunk-pink"
              onChange={handleChange}
              required
            />
          </div>

          {/* Sign-Up Button */}
          <Button className="w-full bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink text-black font-bold hover:opacity-90 h-12">
            {loading ? "AUTHENTICATING..." : "LOGIN"}
          </Button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          New user?{" "}
          <Link to="/register" className="text-cyberpunk-cyan hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
