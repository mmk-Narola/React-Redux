import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBaseURL from "../api/api";

export const getData = createAsyncThunk("getData", async () => {
  const response = await axiosBaseURL.get("/crud");
  return response.data;
});

export const axiosApiSlice = createSlice({
  name: "axiosApiCall",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default axiosApiSlice.reducer;
