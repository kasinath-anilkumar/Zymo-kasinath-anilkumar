import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-500 text-white px-4">
      <img
        src="/ComingSoon.png" 
        alt="Coming Soon"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6"
      />
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        Coming Soon
      </h1>

      <p className="text-sm sm:text-base md:text-lg opacity-80 text-center max-w-md">
        We're working hard to bring something amazing to you. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
