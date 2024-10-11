import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '/notfound.jpg'; // Example image path
import { useLocationContext } from "./Context/Location";

const NotFound = () => {
  const { location } = useLocationContext();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <img
        src={NotFoundImage}
        alt="404 Not Found"
        className="w-80 h-80 mb-8"
      />
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to={`http://localhost:3000/self-drive-car-rentals/${location}`}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
