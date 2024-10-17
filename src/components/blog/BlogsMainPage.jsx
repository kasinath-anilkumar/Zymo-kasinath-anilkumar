import React from "react";
import "./blogsMainPage.scss";
import BlogCard from "./BlogCard";
import BlogContext from "../../Context/BlogContext";

import { db } from "../../firebase-config";
import { useEffect, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Helmet } from "react-helmet";

function BlogsMainPage() {
  const blogsCollectionRef = collection(db, "blogs");
  const { blogsList, setBlogsList } = useContext(BlogContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBlogsList = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);
        const filteredBlogsList = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredBlogsList);
        setBlogsList(filteredBlogsList);
      } catch (e) {
        console.error(e);
      }
    };
    getBlogsList();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://zymo.app/blogs" />
      </Helmet>
      <div className="blogs-container">
        <h1>
          <span>“</span> Blog <span>”</span>
        </h1>
        <p> India's Largest Aggregator For Self Drive Car Rental </p>
        <div className="blogs-cards-container">
          {blogsList.map((blog, id) => {
            return <BlogCard blog={blog} key={id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default BlogsMainPage;
