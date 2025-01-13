import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] text-[#00FF00]">
                       {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">Register</h1>
         
                    {/* Form Container */}
        <form className="w-full max-w-sm space-y-4">

                    {/* Username Input */}
          <div className="mt-2 ">
            <Input type="text" placeholder="Username" className="bg-zinc-600" />
          </div>

                    {/* Email Input */}
          <div className="mt-2 ">
            <Input type="email" placeholder="Email" className="bg-zinc-600" />
          </div>

                   {/* Password Input */}
          <div className="mt-2 ">
            <Input
              type="password"
              placeholder="***********"
              className="bg-zinc-600"
            />
          </div>

                  {/* Sign-Up Button */}
          <Button className="bg-[#175332ec] text-white hover:scale-105 hover:bg-green-300 transition-transform hover:text-zinc-600 w-full">
            Sign Up
          </Button>
        </form>

                   {/* Login Link */}
        <p className="mt-4">
          Already have an account?{"  "}
          <Link to="/login" className="underline hover:text-white">
            Login
          </Link>
        </p>
      </div>

      <div className="mt-8 flex space-x-4">
      <span className="h-4 w-4 bg-green-400 rounded-full animate-pulse"></span>



      </div>
    </>
  );
};

export default Register;
