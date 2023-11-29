import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

// USER REGISTRATION
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await api.post("/auth/register", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

//LOGIN USER
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

//UPDATE USER DETAILS
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    debugger;
    const userObj = JSON.parse(localStorage.user);
    const accessToken = userObj.token;
    try {
      const response = await api.patch("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user = action.payload.user);
        addUserToLocalStorage(action.payload.user);
        toast.success("User Created Sucessfully!");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        addUserToLocalStorage(action.payload.user);
        state.isLoading = false;
        state.user = action.payload.user;
        toast.success(`${action.payload.user.name}, Login Successfull !`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //Update User
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        removeUserFromLocalStorage();
        addUserToLocalStorage(action.payload.user);
        state.isLoading = false;
        state.user = action.payload.user;
        toast.success(`${action.payload.user.name}, Updated Successfull !`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
