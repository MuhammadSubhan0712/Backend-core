import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#333333]">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-3 text-center text-yellow-400 drop-shadow-md">
        Login
      </h1>

      {/* Form Container */}
      <div className="bg-[#121212] p-6 rounded-lg shadow-xl w-full max-w-sm">
        <form className="space-y-6">
    
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
