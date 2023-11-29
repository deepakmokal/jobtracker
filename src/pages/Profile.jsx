import React, { useEffect } from "react";
import FormTitle from "../components/UI/FormTitle";
import FormRow from "../components/UI/FormRow";
import Card from "../components/UI/Card";
import { useForm } from "react-hook-form";
import Button from "../components/UI/Button";
import { updateUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const {isLoading, user} = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onUserUpdate = (data) => {
    dispatch(updateUser(data));
  }

  return (
    <>
      <Card>
        <FormTitle>Profile</FormTitle>
        <form onSubmit={handleSubmit(onUserUpdate)}>
        <div className="grid grid-cols-3 gap-4">
          
          <FormRow
            type="text"
            name="name"
            defaultValue={user.name}
            isRequired = "true"
            classname="input"
            labelText="Name"
            register={register}
            errors={errors}
          />

          <FormRow
            type="text"
            name="lastName"
            defaultValue={user.lastName}
            isRequired = "true"
            classname="input"
            labelText="Last Name"
            register={register}
            errors={errors}
          />

          <FormRow
            type="email"
            name="email"
            defaultValue={user.email}
            isRequired = "true"
            classname="input"
            labelText="Email"
            register={register}
            errors={errors}
          />

          <FormRow
            type="text"
            name="location"
            defaultValue={user.location}
            isRequired = "true"
            classname="input"
            labelText="Location"
            register={register}
            errors={errors}
          />

          <div className="flex self-end mb-4">
            <Button
              type="submit"
              classname="primary-btn w-full p-2.5 "
              label="Save Changes"
            />
          </div>
       
      </div>
        </form>
      </Card>
    </>
  );
};

export default Profile;
