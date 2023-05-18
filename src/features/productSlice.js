import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// product api call
export const getProduct = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = response.json();
  return result;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [getProduct.rejected]: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
