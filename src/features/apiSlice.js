import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api call
export const getAllData = createAsyncThunk("gitUser", async () => {
  const response = await fetch("https://api.github.com/users");
  const result = response.json();
  return result;
});

export const apiSlice = createSlice({
  name: "apiCall",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected]: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default apiSlice.reducer;
