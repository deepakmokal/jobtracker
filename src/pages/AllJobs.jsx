import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import FormRow from "../components/UI/FormRow";
import FormTitle from "../components/UI/FormTitle";
import JobCard from "../components/UI/JobCard";
import SelectDropdown from "../components/UI/SelectDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../features/jobs/jobsSlice";
import Loader from '../components/UI/Loader'

const AllJobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const statusOptions = ["interview", "pending", "declined"];
  const jobtypeOptions = ["full-time", "part-time", "remote", "internship"];
  const sortOptions = ["latest", "oldest", "a-z", "z-a"];
  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const handleChange = () => {};
  const dispatch = useDispatch();

  const onJobFetch = (data) => {
    console.log(data)
    dispatch(fetchAllJobs(data))
  };

  useEffect(() => {
    debugger;
    dispatch(fetchAllJobs({sort:'all', status:'all',jobType: 'all'}));
  }, []);

  
  const allJobs = jobs.jobs
  
  if(isLoading) return <Loader/>
  
  return (
    
    <>
      <Card>
        <FormTitle>Add Jobs</FormTitle>
        <form action="" onSubmit={handleSubmit(onJobFetch)}>
          <div className="grid grid-cols-3 gap-4">
            <FormRow
              type="text"
              name="search"
              isRequired = "false"
              register={register}
              errors={errors}
              classname="input"
              labelText="Search"
              onChange={handleChange}
            />

            <SelectDropdown
              options={statusOptions}
              name="status"
              label="Status"
              register={register}
              errors={errors}
            />
            <SelectDropdown
              options={jobtypeOptions}
              name="jobType"
              label="Job Type"
              register={register}
              errors={errors}
              
            />

            <SelectDropdown
              options={sortOptions}
              name="sort"
              label="Sort Type"
              register={register}
              errors={errors}
            />

            <div className="action flex gap-2  items-end">
              <Button
                type="reset"
                classname="secondary-btn w-1/2"
                label="Clear"
              />
              <Button
                type="submit"
                classname="primary-btn w-1/2"
                label="Submit"
              />
            </div>
          </div>
        </form>
      </Card>

      
    <div className="grid grid-cols-3 gap-4">
    {allJobs.map((job, key) => (
        <JobCard key={job._id}
        position={job.position}
        company={job.company}
        status={job.status}
        location={job.jobLocation}
        jobtype={job.jobType}
        date={job.updatedAt}
      />
      ))}
    </div>
      

    
    </>
  );
};

export default AllJobs;
