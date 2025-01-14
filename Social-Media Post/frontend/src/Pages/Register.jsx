import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#333333]">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-3 text-center text-yellow-400 drop-shadow-md">
      Register
      </h1>
      <span className="text-xl font-mono text-orange-600">✨ to get social 🤳</span>
      {/* Form Container */}
      <div className="bg-[#121212] p-6 rounded-lg shadow-xl w-full max-w-sm">
        <form className="space-y-6">
          {/* Username Input */}
          <div>
            <Input
              type="text"
              placeholder="Username"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
            />
          </div>

          {/* Email Input */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
            />
          </div>

          {/* Password Input */}
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
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
            className="underline text-yellow-400 hover:text-green-400 transition-colors"
          >
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
