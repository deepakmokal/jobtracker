import React, { useState } from "react";
import Card from "../components/UI/Card";
import FormTitle from "../components/UI/FormTitle";
import FormRow from "../components/UI/FormRow";
import Dropdown from "../components/UI/Dropdown";
import DropdownHOC from "../components/UI/DropdownHOC";
import { useForm } from "react-hook-form";
import Button from "../components/UI/Button";

const AddJob = () => {
  const statusOptions = ['Interview', 'Pending', 'Declined']
  const jobtypeOptions = ['Full-time', 'Part-time', 'Remote', 'Internship']
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const StatusDropdown = DropdownHOC(Dropdown, 'Select Status', statusOptions, 'Status');
  const JobTypeDropdown = DropdownHOC(Dropdown, 'Select Job Type', jobtypeOptions,'Job Type');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = () => {
    
  }


  return (
    <>
      <Card>
        <FormTitle>Add Jobs</FormTitle>
        <div className="grid grid-cols-3 gap-4">
          <FormRow
            type="text"
            name="position"
            register={register}
            errors = {errors}
            classname="input"
            labelText="Postion"
            onChange={handleChange}
          />

          <FormRow
            type="text"
            name="company"
            register={register}
            errors = {errors}
            classname="input"
            labelText="Company"
            onChange={handleChange}
          />

          <FormRow
            type="text"
            name="joblocation"
            register={register}
            errors = {errors}
            classname="input"
            onChange={handleChange}
            labelText="Job Location"
          />

          <StatusDropdown/>
          
          <JobTypeDropdown/>

          <div className="action flex gap-2  items-end">
            {/* <button className="secondary-btn w-1/2">Clear</button>
            <button className="primary-btn w-1/2">Submit</button> */}
            <Button 
            classname="secondary-btn w-1/2"
            type='button'
            label='Clear'/>

            <Button 
            classname="primary-btn w-1/2"
            type='button'
            label='Submit'/>
          </div>
          
        </div>
        
      </Card>
    </>
  );
};

export default AddJob;
