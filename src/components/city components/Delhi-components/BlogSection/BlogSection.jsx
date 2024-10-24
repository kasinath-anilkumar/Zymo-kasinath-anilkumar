import React from "react";
import carSkeleton from "/car-skeleton.png";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Zymo Cars And Zoom Car:",
      subtitle: "Driving The Future Of Self-Drive Rental Cars",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Zymo Cars:",
      subtitle: "Luxury Option For Car Rental In India",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title:
        "Introduction: Exploring Temporary Transportation Services In India",
      subtitle: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Explore India In Style:",
      subtitle:
        "Renting A Baleno For A Memorable Self-Drive Experience With Zymo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#5542b1e5] to-[#a738d3] py-16 font-poppins mx-4 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="ml-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white py-2">
            Checkout our blogs below!
          </h2>
          <p className="text-xs md:text-lg text-white mb-8">
            Find out what's happening in your city.
          </p>
        </div>

        <div className="grid gap-5 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg p-2 md:p-3 lg:p-6 transition-transform duration-300 hover:scale-105 mx-4"
            >
              <img
                src={carSkeleton}
                alt="Car"
                className="rounded-md mb-6 w-full h-40 sm:h-44 md:h-48 lg:h-36 px-12 sm:px-13 lg:px-28"
              />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                {blog.title}
              </h3>
              <h4 className="text-sm text-gray-600 font-semibold mb-2">
                {blog.subtitle}
              </h4>
              <p className="text-gray-600 mb-4 text-sm px-2 md:px-5">
                {blog.desc}
              </p>
              <button className="bg-purple-700 text-white px-3 py-2 text-sm shadow-xl rounded-lg hover:bg-purple-800">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
