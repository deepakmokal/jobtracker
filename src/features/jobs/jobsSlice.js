import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../utils/axios";


const initialState = {
  isLoading: true,
  jobs: []
};

// JOB STATS
// export const jobStats = createAsyncThunk(
//   "jobs/jobStats",
//   async (jobs,thunkAPI) => {
//     const userObj = JSON.parse(localStorage.user);
//     const accessToken = userObj.token;
//     try {
//       const response = await api.get("/jobs/stats", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );

// ADD JOB
export const addJob = createAsyncThunk(
  "jobs/addJob",
  async (job,thunkAPI) => {
    debugger
    const userObj = JSON.parse(localStorage.user);
    const accessToken = userObj.token;
    try {
      const response = await api.post("/jobs", job, {
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

// GET ALL JOBS
export const fetchAllJobs = createAsyncThunk(
  "jobs/fetchAllJobs",
  async ({search, status, jobType, sort}) => {
    debugger
    
    const userObj = JSON.parse(localStorage.user);
    const accessToken = userObj.token;
    try {
      const response = await api.get(`/jobs?status=${status || 'all'}&jobType=${jobType || 'all'}&sort=${sort || 'all'}&page=1&search=${search || ''}`,
       {
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


const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(jobStats.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(jobStats.fulfilled, (state, action) => {
      //   state.jobs = action.payload;
      //   state.isLoading = false;        
      // })
      // .addCase(jobStats.rejected, (state) => {
      //   state.isLoading = false;
      // })
      
      //ADD JOB
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs = action.payload;
        toast.success("Job Created Sucessfully!");
        state.isLoading = false;        
      })
      .addCase(addJob.rejected, (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload);
      })

      // FETCH ALL JOBS
      .addCase(fetchAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.isLoading = false;        
      })
      .addCase(fetchAllJobs.rejected, (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload);
      })

  },
});


export default jobsSlice.reducer;