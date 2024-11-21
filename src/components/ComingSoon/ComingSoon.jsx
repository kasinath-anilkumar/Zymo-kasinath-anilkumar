import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-500 text-white">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5J__x57pQvNgyFLuqqEtVaf7qwny6-mQl5w&s" 
        alt="Coming Soon"
        className="w-40 h-40 mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg opacity-80">
        We're working hard to bring something amazing to you. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;

