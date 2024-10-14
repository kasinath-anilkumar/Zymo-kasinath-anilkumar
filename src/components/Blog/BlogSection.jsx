import React from "react";
import classes from "./BlogSection.module.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const blogCard = [
  {
    url: "https://www.olacabs.com/webstatic/img/new-images/end_for_ice_age.jpeg",
    cont: "2023: Beginning of the End for ICE Age",
  },
  {
    url: "https://www.olacabs.com/webstatic/img/new-images/end_for_ice_age.jpeg",
    cont: "2023: Beginning of the End for ICE Age",
  },
  {
    url: "https://www.olacabs.com/webstatic/img/new-images/end_for_ice_age.jpeg",
    cont: "2023: Beginning of the End for ICE Age",
  },
  {
    url: "https://www.olacabs.com/webstatic/img/new-images/end_for_ice_age.jpeg",
    cont: "2023: Beginning of the End for ICE Age",
  },
  {
    url: "https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/pli-agreement.png",
    cont: "LetzRent signs PLI agreement",
  },
  {
    url: "https://www.aucklandnz.com/sites/build_auckland/files/styles/carousel_banner/public/tourismnz/5044205/p-F9167C0B-FE43-D27B-E3B5254A025E8561-2544003.jpg",
    cont: "cars collection of LetzRent",
  },
  {
    url: "https://i.ytimg.com/vi/PsOB88U9o3M/maxresdefault.jpg",
    cont: "Highest rated App in this category",
  },
];

function BlogSection() {
  return (
    <div className={classes.mainBlogContainer}>
      <div className={classes.blogContainer}>
        <h1>Recent from our blogs</h1>

        <div className={classes.blogCardContainer}>
          {blogCard.map((blog) => (
            <div className={classes.blogCard}>
              <div className={classes.blogImage}>
                <img src={blog.url} alt="blogImg" />
              </div>

              <div className={classes.blogContent}>
                <p>{blog.cont}</p>
                <Link to="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew">
                  Know more <BsArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;