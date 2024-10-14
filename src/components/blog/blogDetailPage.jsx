import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { db } from "../../../src/firebase-config";
// import { collection, query, where, onSnapshot } from "firebase/firestore";

import "./blogDetailPage.scss";

function BlogDetailPage() {
  const { id } = useParams();
  const [filteredBlog, setFilteredBlog] = useState({});
  // const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let blogSlug = id
    .split("-")
    .join(" ")
    .split("$")
    .join("?")
    .split("_")
    .join("-");

  // const getBlogQuery = query(
  //   blogsCollectionRef,
  //   where("title", "==", blogSlug)
  // );

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(getBlogQuery, (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       setFilteredBlog({ ...doc.data(), id: doc.id });
  //     });
  //   });

  //   return () => unsubscribe();
  // }, [blogSlug]);

  return (
    <div>
      <Helmet>
        <link rel="canonical" href={`https://zymo.app/blog/${id}`} />
      </Helmet>
      <div className="blog-details-container">
        <h2>{filteredBlog?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: filteredBlog?.description }}
        ></div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
