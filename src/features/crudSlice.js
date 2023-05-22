import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosBaseURL from "../api/api";

//create User
export const createUser = createAsyncThunk(
  "createUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.post("/crud", userDetails);

      return response.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

// read User
export const showUser = createAsyncThunk("getData", async () => {
  const response = await axiosBaseURL.get("/crud");
  return response.data;
});

// delete User
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.delete(`/crud/${userId}`);

      return response.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

//update User
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.put(`/crud/${data.id}`, data.user);
      data.navigate("/home");
      return response.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

export const crudSlice = createSlice({
  name: "crudOperation",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },

  // extraReducers: {
  //   [createUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [createUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users.push(action.payload);
  //   },
  //   [createUser.rejected]: (state) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  //   [showUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [showUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //   },
  //   [showUser.rejected]: (state) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [deleteUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     const { id } = action.payload;
  //     if (id) {
  //       state.users = state.users.filter((ele) => ele.id !== id);
  //     }
  //   },
  //   [deleteUser.rejected]: (state) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  //   [updateUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [updateUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users = state.users.map((ele) =>
  //       ele.id === action.payload.id ? action.payload : ele
  //     );
  //   },
  //   [updateUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    // Show User
    builder.addCase(showUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(showUser.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Create User
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete User
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((ele) => ele.id !== id);
      }
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Update User
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default crudSlice.reducer;
export const { searchUser } = crudSlice.actions;
