import React from "react";
import Card from "../components/UI/Card";
import FormTitle from "../components/UI/FormTitle";
import FormRow from "../components/UI/FormRow";
import DropdownHOC from "../components/UI/DropdownHOC";
import Dropdown from "../components/UI/Dropdown";
import JobCard from "../components/UI/JobCard";
import { useForm } from "react-hook-form";
import Button from "../components/UI/Button";


const AllJobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const statusOptions = ["Interview", "Pending", "Declined"];
  const jobtypeOptions = ["Full-time", "Part-time", "Remote", "Internship"];
  const sortOptions = ["Latest", "Oldest", "a-z", "z-a"];

  const StatusDropdown = DropdownHOC(
    Dropdown,
    "Select Status",
    statusOptions,
    "Status"
  );
  const JobTypeDropdown = DropdownHOC(
    Dropdown,
    "Select Job Type",
    jobtypeOptions,
    "Type"
  );
  const SortDropdown = DropdownHOC(Dropdown, "Sort By", sortOptions, "Type");

  const handleChange = () => {};
  return (
    <>
      <Card>
        <FormTitle>Add Jobs</FormTitle>
        <div className="grid grid-cols-3 gap-4">
          <FormRow
            type="text"
            name="search"
            register={register}
            errors = {errors}
            classname="input"
            labelText="Search"
            onChange={handleChange}
          />

          <StatusDropdown />

          <JobTypeDropdown />

          <SortDropdown />

          <div className="action flex gap-2  items-end">
            {/* <button className="secondary-btn w-1/2">Clear</button>
            <button className="primary-btn w-1/2">Submit</button> */}

            <Button
            type='button'
            classname='secondary-btn w-1/2'
            label='Clear' />
            <Button 
            type='button'
            classname='primary-btn w-1/2'
            label='Submit' />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <JobCard 
        position='Accounting Assistant III'
        company='Kunze And Sons'
        status='Interview'
        location='Kafr Mandā'
        jobtype='Remote'
        date='Dec 22nd, 2021'/>

        <JobCard 
        position='Environmental Tech'
        company='Cremin LLC'
        status='Declined'
        location='Meixian'
        jobtype='Full-Time'
        date='Dec 10th, 2021'
        />

        <JobCard 
        position='Civil Engineer' 
        company='Bechtelar-Bednar'
        status='Declined'
        location='Kiamba'
        jobtype='Internship'
        date='Dec 27th, 2021'
        />
        
        <JobCard 
        position='Actuary'
        company='Klocko And Sons'
        status='Pending'
        location='Dianfang'
        jobtype='Full-Time'
        date='Dec 9th, 2021'
        />

        <JobCard 
        position='Pharmacist'
        company='Schimmel, Beahan And Baumbach'
        status='Interview'
        location='Jakhaly'
        jobtype='Internship'
        date='Oct 21st, 2021'
        />
        
      </div>
    </>
  );
};

export default AllJobs;
