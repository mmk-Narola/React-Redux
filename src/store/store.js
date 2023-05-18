import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import postsSlice from "../features/postsSlice";
import apiSlice from "../features/apiSlice";
import productSlice from "../features/productSlice";
import cartSlice from "../features/cartSlice";
import axiosApiSlice from "../features/axiosSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    apiCall: apiSlice,
    products: productSlice,
    cart: cartSlice,
    axiosApiCall: axiosApiSlice,
  },
});
