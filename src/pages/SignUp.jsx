import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SocialLinks from "../components/SocialLinks";
import FormRow from "../components/UI/FormRow";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import Button from "../components/UI/Button";


const SignUp = () => {
  const {user, isLoading} = useSelector((state) => state.user)
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const { loading} = useSelector((state) => state.user)
  const handleChange = () => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //On Form Submission
  const onFormSubmit = (data) => {
    dispatch(registerUser(data))
    navigate('/login')
  };

  return (
    <>
    <ToastContainer />
      <div className="grid place-items-center h-screen w-screen bg-slate-50">
        <div className="py-5 px-7 bg-white shadow-sm rounded-md w-[400px] h-auto border">
          <p className="text-slate-500 text-center font-bold">
            Create New Account
          </p>
          <p className="text-sm text-center mt-2 text-slate-400">
            Get your free velzon account now
          </p>
          <div className="mt-7">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <FormRow
                type="email"
                name="email"
                classname="input"
                handleChange={handleChange}
                labelText="Email"
                register={register}
                errors={errors}
                placeholder="Enter Email ID"
              />

              <FormRow
                type="text"
                name="name"
                classname="input"
                handleChange={handleChange}
                labelText="Username"
                register={register}
                errors={errors}
                placeholder="Enter Username"
              />

              <FormRow
                type="password"
                name="password"
                classname="input"
                handleChange={handleChange}
                labelText="Password"
                register={register}
                errors={errors}
                placeholder="Enter Password"
              />

              {/* <button
                type="submit"
                className="primary-btn font-medium rounded-sm text-sm  py-3 mr-2 mb-2  w-full my-4"
              >
                Sign Up
              </button> */}
              <Button
                type="submit"
                classname="primary-btn font-medium rounded-sm text-sm  py-3 mr-2 mb-2  w-full my-4"
                label={isLoading ? 'Loading...' : 'Sign Up'}
              />
            </form>

            <div
              className="my-6
                 text-slate-400 text-sm
                 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-200  before:content-[''] after:h-px after:flex-1 after:bg-gray-200  after:content-['']"
            >
              Create account with
            </div>

            <SocialLinks />
          </div>
          <p className="my-4 text-sm text-center">
            Already have an account ?
            <span className="text-blue-500 mx-1">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
