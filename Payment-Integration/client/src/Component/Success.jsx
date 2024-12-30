import React from "react";
import Confetti from "react-confetti";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 via-white to-green-50 text-center">
      {/* Celebration Icon */}
      <div className="animate-bounce mb-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png" // Replace with your own celebratory icon or animation
          alt="Success"
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </div>

      {/* Success Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
        Payment Successful! 🎉
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Thank you for your purchase. Your transaction was completed successfully, and your order is now being processed.
      </p>

      {/* Back to Home Button */}
      <div className="mt-6">
        <a
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Back to Home
        </a>
      </div>

      {/* Confetti Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="confetti w-3 h-3 bg-yellow-400 absolute"></div>
        <div className="confetti w-3 h-3 bg-blue-400 absolute"></div>
        <div className="confetti w-3 h-3 bg-pink-400 absolute"></div>
        {/* Add more confetti pieces or use a confetti library */}
      </div>
    </div>
  );
};

export default Success;
