import React, { useState } from "react";
import carSkeleton from "/car-skeleton.png";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useContext } from "react";
import BlogContext from "../../../Context/BlogContext";
import { db } from "../../../firebase-config";

const BlogSection = ({ cityName }) => {
  const blogsCollectionRef = collection(db, "blogs");
  const { blogsList, setBlogsList } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBlogsList = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);
        const filteredBlogsList = data.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((blog) => {
            const searchTerm = cityName.toLowerCase();
            return (
              (blog.title && blog.title.toLowerCase().includes(searchTerm)) ||
              (blog.metaDescription && blog.metaDescription.toLowerCase().includes(searchTerm)) ||
              (blog.category && blog.category.toLowerCase().includes(searchTerm))
            );
          });

        setBlogsList(filteredBlogsList);
      } catch (e) {
        console.error(e);
      }
    };
    getBlogsList();
  }, [cityName]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsList.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogsList.length / blogsPerPage);

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
          {currentBlogs.map((blog, id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg p-2 md:p-3 lg:p-6 transition-transform duration-300 hover:scale-105 mx-4"
            >
              <img
                src={blog.cover || carSkeleton}
                alt="Car"
                className="rounded-md mb-6 w-full sm:h-44 md:h-48 lg:h-52 px-12 sm:px-13 lg:px-28"
              />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                {blog.title}
              </h3>
              <h4 className="text-sm text-gray-600 font-semibold mb-2">
                {blog.category}
              </h4>
              <p className="text-gray-600 mb-4 text-sm px-2 md:px-5">
                {blog.metaDescription}
              </p>
              <button className="bg-purple-700 text-white px-3 py-2 text-sm shadow-xl rounded-lg hover:bg-purple-800">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-1 text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
