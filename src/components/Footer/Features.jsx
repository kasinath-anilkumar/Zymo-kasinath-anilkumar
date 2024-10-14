import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="w-full md:w-[130px] md:h-[272px]">
      <h3 className="text-xl font-bold mb-4">Features</h3>
      <ul>
        <li>
          <Link to="/blogs" className="hover:text-gray-300">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms-of-service" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/cancellation-policy" className="hover:text-gray-300">
            Cancellation Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Features;
