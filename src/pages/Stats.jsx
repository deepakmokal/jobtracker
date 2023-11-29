import React, { useEffect } from "react";
import DeclineJobsImg from "../assets/images/bug-svgrepo-com.svg";
import ScheduleInterviewImg from "../assets/images/calendar-mark-date-svgrepo-com.svg";
import PendingAppImg from "../assets/images/pending-applications.svg";
import { useDispatch, useSelector } from "react-redux";
import { jobStats } from "../features/stats/statsSlice";
import Loader from "../components/UI/Loader";

const Stats = () => {
  const { isLoading, stats } = useSelector((state) => state.stats);
  const { defaultStats } = stats;
  // console.log(defaultStats)
  console.log('After Default Stats', defaultStats)
  console.log(stats);
  const dispatch = useDispatch();
  
  useEffect(() => {
    debugger
    dispatch(jobStats());
  }, []);
  return (
    <>
    {isLoading ? <Loader /> : (
      <div className="stat-card flex gap-10 justify-between items-center">
        <div className="px-4 py-5 w-1/3 rounded bg-white border-t-black border-b-8  border-yellow-500 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-6xl font-extrabold text-yellow-500">{defaultStats.pending}</p>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <img
                className="h-20 w-20"
                src={PendingAppImg}
                alt="pending applications"
              />
            </div>
          </div>
          <p className="mt-5 text-lg font-bold">Pending Applications</p>
        </div>

        <div className="px-4 py-5 w-1/3 rounded bg-white border-t-black border-b-8  border-blue-500 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-6xl font-extrabold text-blue-500">{defaultStats.interview}</p>
            <div className="p-3 bg-blue-200 rounded-lg">
              <img
                className="h-20 w-20"
                src={ScheduleInterviewImg}
                alt="pending applications"
              />
            </div>
          </div>
          <p className="mt-5 text-lg font-bold">Interviews Scheduled</p>
        </div>

        <div className="px-4 py-5 w-1/3 rounded bg-white border-t-black border-b-8  border-red-500 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-6xl font-extrabold text-red-500">{defaultStats.declined}</p>
            <div className="p-3 bg-red-100 rounded-lg">
              <img
                className="h-20 w-20"
                src={DeclineJobsImg}
                alt="Jobs Declined"
              />
            </div>
          </div>
          <p className="mt-5 text-lg font-bold">Jobs Declined</p>
        </div>
      </div>
    )}
      
    </>
  );
};

export default Stats;
