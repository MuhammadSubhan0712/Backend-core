import React from "react";
import Confetti from "react-confetti";

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-100 via-white to-red-50 text-center">
      {/* Sad Icon */}
      <div className="animate-shake mb-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/463/463612.png" // Replace with your own icon
          alt="Cancel"
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </div>

      {/* Cancellation Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
        Transaction Canceled 🚫
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        It looks like your transaction was not completed. You can try again or
        contact support for assistance.
      </p>

      {/* Retry or Contact Support Buttons */}
      <div className="flex gap-4">
        <a
          href="/"
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Try Again
        </a>
        <a
          href="/support"
          className="bg-gray-200 hover:bg-gray-300 text-red-600 text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Contact Support
        </a>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="confetti w-3 h-3 bg-red-400 opacity-30 absolute"></div>
        <div className="confetti w-3 h-3 bg-gray-400 opacity-30 absolute"></div>
        <div className="confetti w-3 h-3 bg-pink-400 opacity-30 absolute"></div>
        {/* Add more decorative elements as needed */}
      </div>
    </div>
  );
};

export default Cancel;
