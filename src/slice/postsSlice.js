import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },

    postDeleted(state, action) {
      return state.filter((post) => post.id !== action.payload.id);
    },

    postUpdated: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ));
    },
  },
});

export const { postAdded, postDeleted, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;
