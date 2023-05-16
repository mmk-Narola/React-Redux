import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { postAdded } from "../../slice/postsSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (!title && !content) {
      setFormError("Please fill the form");
    } else {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
      setFormError("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <h3>{formError}</h3>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="input"
          />
          <label htmlFor="postContent">Content:</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            className="input"
          />
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPost;
