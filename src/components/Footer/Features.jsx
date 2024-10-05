import React from "react";

const Features = () => {
  return (
    <div className="w-full md:w-[130px] md:h-[272px]">
      <h3 className="text-xl font-bold mb-4">Features</h3>
      <ul className="">
        <li>
          <a href="#" className="hover:text-gray-300">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Cancellation Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Features;
