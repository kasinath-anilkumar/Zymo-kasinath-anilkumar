import "./createblogpage.scss";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";

import { db } from "../../firebase-config";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { PasswordDialog } from "./PasswordDialog";
import { collection, getDocs, query, where } from "firebase/firestore";

function CreateBlogPage() {
  const { id } = useParams();
  const [values, setValues] = React.useState({});
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const blogsCollectionRef = collection(db, "blogs");

  let blogSlug = "";
  if (id !== "create") {
    blogSlug = id
      .split("-")
      .join(" ")
      .split("$")
      .join("?")
      .split("_")
      .join("-");
  }

  const getBlogQuery = query(
    blogsCollectionRef,
    where("title", "==", blogSlug)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id === "create") return;

    async function getDocumentByTitle() {
      try {
        const querySnapshot = await getDocs(getBlogQuery);

        if (querySnapshot.empty) {
          console.log("No matching documents.");
          return null;
        }

        const document = querySnapshot.docs[0];
        const data = { id: document.id, ...document.data() };
        const {
          title,
          metaDescription,
          subheading,
          category,
          description,
          altText,
        } = data;

        setValues({ title, metaDescription, subheading, category, altText });
        setDescription(description);
      } catch (error) {
        console.error("Error getting document(CreateBlogPage.js):", error);
        return null;
      }
    }

    getDocumentByTitle();
  }, [id]);

  function handleSubmit() {
    setOpen(true);
  }

  function handleInputsChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="blog-form-container">
      {id === "create" ? (
        <h1>
          <span>“</span> Create Blog <span>”</span>
        </h1>
      ) : (
        <h1>
          <span>“</span> Edit Blog <span>”</span>
        </h1>
      )}
      <h4>Title</h4>
      <TextField
        name="title"
        variant="outlined"
        onChange={handleInputsChange}
        value={values.title || ""}
        className="text-field"
      />
      <h4>Meta Description</h4>
      <TextField
        name="metaDescription"
        variant="outlined"
        onChange={handleInputsChange}
        value={values.metaDescription || ""}
        className="text-field"
      />
      <h4>Sub Heading</h4>
      <TextField
        name="subheading"
        variant="outlined"
        onChange={handleInputsChange}
        value={values.subheading || ""}
        className="text-field"
      />
      <h4>Category</h4>
      <TextField
        name="category"
        variant="outlined"
        onChange={handleInputsChange}
        value={values.category || ""}
        className="text-field"
      />
      <h4>Description</h4>
      <ReactQuill
        theme="snow"
        name="description"
        className="text-area"
        onChange={setDescription}
        value={description}
      />
      <h4>Cover Image</h4>
      <TextField
        type="file"
        variant="outlined"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <h4>Alt Text</h4>
      <TextField
        name="altText"
        type="text"
        variant="outlined"
        onChange={handleInputsChange}
        value={values.altText || ""}
      />
      <button onClick={handleSubmit}>Upload Blog</button>
      {id === "create" ? (
        <PasswordDialog
          open={open}
          setOpen={setOpen}
          values={values}
          image={image}
          description={description}
          operation="create"
        />
      ) : (
        <PasswordDialog
          open={open}
          setOpen={setOpen}
          values={values}
          image={image}
          description={description}
          operation="edit"
          blogSlug={blogSlug}
        />
      )}
    </div>
  );
}

export default CreateBlogPage;
