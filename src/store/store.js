import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import postsSlice from "../slice/postsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
  },
});
