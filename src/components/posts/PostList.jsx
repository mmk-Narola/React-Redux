import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDeleted, postUpdated } from "../../features/postsSlice";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const viewCounter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");
  const [state, setState] = useState({
    id: "",
    title: "",
    content: "",
  });

  const removePost = (id) => {
    dispatch(
      postDeleted({
        id: id,
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const editPost = (id, title, content) => {
    setIsEdit(true);
    setState({
      id: id,
      title: title,
      content: content,
    });
  };

  const updatePost = () => {
    const { id, title, content } = state;

    if (!state.title && !state.content) {
      setError("All field required");
    } else if (!state.title) {
      setError("Title field required");
    } else if (!state.content) {
      setError("Content field required");
    } else {
      dispatch(
        postUpdated({
          id: id,
          title: title,
          content: content,
        })
      );
      setIsEdit(false);
      setError("");
      setState({
        id: "",
        title: "",
        content: "",
      });
    }
  };

  return (
    <div>
      <h2>Posts List</h2>
      <h3>{error}</h3>
      {isEdit ? (
        <form>
          <input
            type="text"
            id="postTitle"
            name="title"
            value={state.title}
            onChange={handleChange}
          />

          <input
            type="text"
            id="postContent"
            name="content"
            value={state.content}
            onChange={handleChange}
          />
          <button type="button" onClick={updatePost}>
            Update Post
          </button>
        </form>
      ) : (
        <div className="ulList">
          <ul>
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id}>
                  <li>{post.title}</li>
                  <li>{post.content}</li>
                  <li>
                    <button onClick={() => removePost(post.id)}>Remove</button>
                    <button
                      onClick={() =>
                        editPost(post.id, post.title, post.content)
                      }
                    >
                      Edit
                    </button>
                  </li>
                  <li>{viewCounter}</li>
                </div>
              ))
            ) : (
              <>
                <h4>No PostList Found</h4>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostList;
