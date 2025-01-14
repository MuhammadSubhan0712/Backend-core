import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Posting = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#333333] text-white overflow-hidden">
      
  
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-8 text-center text-yellow-400 drop-shadow-xl">
        Post Your Content
      </h1>

      {/* Form Container */}
      <div className="bg-[#121212] p-8 rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform">
      <form className="space-y-6">
          {/* Post Title Input */}
          <div>
            <Input
              type="text"
              placeholder="Title"
              className="w-full bg-zinc-800 text-white placeholder-gray-400 focus:ring-4 focus:ring-yellow-400 focus:outline-none rounded-lg p-4 shadow-lg"
            />
          </div>

          {/* Post Image Input */}
          <div>
            <Input
              type="file"
              className="w-full bg-zinc-800 text-white placeholder-gray-400 focus:ring-4 focus:ring-yellow-400 focus:outline-none rounded-lg p-4 shadow-lg"
            />
          </div>

          
          {/* Post Button */}
          <Button className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform">
          Post
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Posting;
