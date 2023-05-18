import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

// const cartSlice = crea createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       state.push(action.payload);
//     },
//   },
// });

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
