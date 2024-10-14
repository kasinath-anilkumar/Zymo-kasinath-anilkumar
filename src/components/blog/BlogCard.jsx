import "./BlogCard.scss";
import React from "react";
import Image from "../../../src/assets/zymoCover.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function BlogCard({ blog }) {
  const slug = blog?.title
    .split("-")
    .join("_")
    .split(" ")
    .join("-")
    .split("?")
    .join("$");

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={blog.metaDescription || blog.title}
        />
        <link rel="canonical" href={`https://www.zymo.app/blog/${slug}`} />
      </Helmet>
      
      <Link className="link" to={`/blog/${slug}`}>
        <div className="blog-card-container">
          <img src={blog.cover || Image} alt={blog.altText || "cover"} />
          {blog.category ? (
            <span>{blog.category}</span>
          ) : (
            <div className="no-category"></div>
          )}
          <h3>{blog.title}</h3>
          <p>{blog.metaDescription}</p>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
