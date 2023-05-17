import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import postsSlice from "../features/postsSlice";
import apiSlice from "../features/apiSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    apiCall: apiSlice,
  },
});
