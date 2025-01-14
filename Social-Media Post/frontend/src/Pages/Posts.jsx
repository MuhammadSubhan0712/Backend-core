import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../index.css";

const Posting = () => {
  return (
    <div className="background relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#333333] text-white overflow-hidden">
      {/* 3D Animated Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-24 bg-yellow-400 rounded-full blur-sm opacity-40 animate-ping"></div>
      <div className="absolute top-10 right-10 w-48 h-24 bg-green-500 rounded-full blur-sm opacity-30 animate-ping"></div>
      <div className="absolute bottom-15 left-10 w-48 h-24 bg-pink-600 rounded-full blur-sm opacity-50 animate-ping"></div>
      <div className="absolute bottom-15 right-10 w-48 h-24 bg-purple-800 rounded-full blur-sm opacity-50 animate-ping"></div>
      <div className="absolute bottom-5 left-10 w-48 h-24 bg-cyan-600 rounded-full blur-sm opacity-50 animate-ping"></div>
      <div className="absolute bottom-5 right-10 w-48 h-24 bg-red-600 rounded-full blur-sm opacity-50 animate-ping"></div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-8 mt-8 text-center text-yellow-400 drop-shadow-xl">
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
          <Button className="w-full bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 text-gray-900 font-bold py-4 rounded-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-transform">
            Post
          </Button>
        </form>
      </div>

      {/* Social Media Post Section */}
      <div className="mt-16 w-full max-w-4xl space-y-8">
        {/* Example Post */}
        {/* <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qCHwikLFLLTUwZEBjaxhvJ-li3pdEQOkhg&s"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          /> */}
        {/* Like and Comment Buttons */}
        {/* <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div> */}

        {/* Example Post */}
        {/* <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHR_XYuOA1-pdT5SqWjYOFtLHDYAzpIoEaw&s"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          /> */}
        {/* Like and Comment Buttons */}
        {/* <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div> */}
        {/* </div> */}

        {/* Example Post */}
        {/* <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSk8tpNaLkHTxCTBMp9aoNCE7tG79_caViLA&s"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          /> */}
        {/* Like and Comment Buttons */}
        {/* <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div> */}

        {/* Example Post */}
        {/* <div className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-yellow-400">John Doe</h2>
          <p className="text-gray-300 mt-2">
            Just posted my first content on XD Social! Loving this futuristic vibe!
          </p>
          <img
            src="data:image/jpeg;base64,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"
            alt="Post content"
            className="mt-4 rounded-lg shadow-md"
          /> */}
        {/* Like and Comment Buttons */}
        {/* <div className="mt-4 flex items-center justify-between">
            <Button className="bg-gradient-to-r from-green-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              👍 Like
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-110 transition-transform">
              💬 Comment
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Posting;
