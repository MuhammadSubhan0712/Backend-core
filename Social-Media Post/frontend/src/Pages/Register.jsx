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
      <div className="bg-cyberpunk-card p-8 rounded-xl border border-cyberpunk-cyan/20 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <Input
              type="text"
              placeholder="Username"
              className="w-full bg-[#222] text-white placeholder-gray-400 border border-cyberpunk-cyan/30 focus:border-cyberpunk-pink"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <Input
              type="email"
              value={formData.email}
              placeholder="Email"
              className="w-full bg-[#222] text-white placeholder-gray-400 border border-cyberpunk-cyan/30 focus:border-cyberpunk-pink"
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
              className="w-full bg-[#222] text-white placeholder-gray-400 border border-cyberpunk-cyan/30 focus:border-cyberpunk-pink"
              onChange={handleChange}
            />
          </div>

          {/* Sign-Up Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyberpunk-cyan to-cyberpunk-pink text-black font-bold hover:opacity-90 h-12">
            {loading ? "CREATING..." : "SIGN UP"}
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
    </div>
  );
};

export default Register;
