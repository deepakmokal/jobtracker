import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './features/user/userSlice'
import  jobsReducer  from './features/jobs/jobsSlice'
import statsReducer from './features/stats/statsSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer,
        stats: statsReducer
    },
  })