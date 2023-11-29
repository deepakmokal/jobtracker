import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import FormRow from "../components/UI/FormRow";
import FormTitle from "../components/UI/FormTitle";
import SelectDropdown from "../components/UI/SelectDropdown";
import { addJob } from "../features/jobs/jobsSlice";

const AddJob = () => {
  const statusOptions = ["interview", "pending", "declined"];
  const jobtypeOptions = ["full-time", "part-time", "remote", "internship"];
  
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAddJob = (data) => {
    debugger
    dispatch(addJob(data))
  };

  const handleChange = () => {};

  
  return (
    <>
      <Card>
        <FormTitle>Add Jobs</FormTitle>
        <form onSubmit={handleSubmit(onAddJob)}>
          <div className="grid grid-cols-3 gap-4">
            <FormRow
              type="text"
              name="position"
              isRequired = "true"
              register={register}
              errors={errors}
              classname="input"
              labelText="Postion"
              onChange={handleChange}
            />

            <FormRow
              type="text"
              name="company"
              register={register}
              isRequired = "true"
              errors={errors}
              classname="input"
              labelText="Company"
              onChange={handleChange}
            />

            <FormRow
              type="text"
              name="jobLocation"
              register={register}
              isRequired = "true"
              errors={errors}
              classname="input"
              onChange={handleChange}
              labelText="Job Location"
            />

            <SelectDropdown
              options={statusOptions}
              name='status'
              label="Status"
              register={register}
              errors={errors}
            />
            <SelectDropdown
              options={jobtypeOptions}
              name='jobType'
              label="Job Type"
              register={register}
              errors={errors}
            />


            <div className="action flex gap-2  items-end">
              
              <Button
                classname="secondary-btn w-1/2"
                type="reset"
                label="Clear"
              />

              <Button
                classname="primary-btn w-1/2"
                type="submit"
                label="Submit"
              />
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddJob;
