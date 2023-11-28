import React from "react";
import FormTitle from "../components/UI/FormTitle";
import FormRow from "../components/UI/FormRow";
import Card from "../components/UI/Card";
import { useForm } from "react-hook-form";
import Button from "../components/UI/Button";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Card>
        <FormTitle>Profile</FormTitle>
        <div className="grid grid-cols-3 gap-4">
          <FormRow
            type="text"
            name="name"
            value=""
            classname="input"
            labelText="Name"
            register={register}
            errors={errors}
          />

          <FormRow
            type="text"
            name="lastname"
            value=""
            classname="input"
            labelText="Last Name"
            register={register}
            errors={errors}
          />

          <FormRow
            type="email"
            name="email"
            value=""
            classname="input"
            labelText="Email"
            register={register}
            errors={errors}
          />

          <FormRow
            type="text"
            name="location"
            value=""
            classname="input"
            labelText="Location"
            register={register}
            errors={errors}
          />

          <div className="flex self-end mb-4">
            {/* <button className="primary-btn w-full p-2.5 ">Save Changes</button> */}
            <Button
            type='button'
             classname="primary-btn w-full p-2.5 "
             label='Save Changes'/>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Profile;
