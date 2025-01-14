import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Posting = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#333333]">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-3 text-center text-yellow-400 drop-shadow-md">
        Post your content
      </h1>

      {/* Form Container */}
      <div className="bg-[#121212] p-6 rounded-lg shadow-xl w-full max-w-sm">
        <form className="space-y-6">
    
          {/* Post Title Input */}
          <div>
            <Input
              type="text"
              placeholder="Title"
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
            />
          </div>

          {/* Post Image Input */}
          <div>
            <Input
              type="file"
              value={}
              className="w-full bg-zinc-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none rounded-lg p-3 transition-shadow"
            />
          </div>

          {/* Sign-Up Button */}
          <Button className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform">
          Post
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Posting;
