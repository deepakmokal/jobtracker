import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../utils/axios";


const initialState = {
  isLoading: true,
  stats: []
};

// JOB STATS
export const jobStats = createAsyncThunk(
  "stats/jobStats",
  async (stats,thunkAPI) => {
    const userObj = JSON.parse(localStorage.user);
    const accessToken = userObj.token;
    try {
      const response = await api.get("/jobs/stats", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);


const statsSlice = createSlice({
  name: "stats",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(jobStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(jobStats.fulfilled, (state, action) => {
        state.stats = action.payload;
        state.isLoading = false;        
      })
      .addCase(jobStats.rejected, (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload)
      })
      
      

  },
});


export default statsSlice.reducer;