import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SocialLinks from "../components/SocialLinks";
import FormRow from "../components/UI/FormRow";
import { loginUser } from "../features/user/userSlice";
import Button from "../components/UI/Button";
import { getUserFromLocalStorage } from "../utils/localStorage";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);
  const [isLocalUser, setIsLocalUser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const checkLocalUser = () => {
    let getLocalUser = getUserFromLocalStorage();
    return getLocalUser ? setIsLocalUser(true) : setIsLocalUser(false);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    }
  });

  //On Form Submission
  const onFormSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };

  const handleChange = () => {};
  return (
    <>
      <ToastContainer />
      <div className="grid place-items-center h-screen w-screen bg-slate-50">
        <div className="py-5 px-7 bg-white shadow-sm rounded-md w-[400px] h-auto border">
          <p className="text-slate-500 text-center font-bold">Welcome Back !</p>
          <p className="text-sm text-center mt-2 text-slate-400">
            Sign in to continue to Velzon.
          </p>
          <div className="mt-7">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <FormRow
                type="email"
                name="email"
                classname="input"
                isRequired = "true"
                handleChange={handleChange}
                labelText="Email"
                register={register}
                errors={errors}
                placeholder="Enter Email ID"
              />
              <FormRow
                type="password"
                name="password"
                classname="input"
                isRequired = "true"
                handleChange={handleChange}
                labelText="Password"
                register={register}
                errors={errors}
                placeholder="Enter Password"
              />

              <div className="flex items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="ml-2 text-sm font-bold text-slate-600 tracking-wide"
                >
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                label={isLoading ? "Loading..." : "Sign In"}
                classname="primary-btn font-medium rounded-sm text-sm  py-3 mr-2 mb-2  w-full my-4"
              />
            </form>

            <div
              className="my-6
                 text-slate-400 text-sm
                 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-200  before:content-[''] after:h-px after:flex-1 after:bg-gray-200  after:content-['']"
            >
              Sign in with
            </div>

            <SocialLinks />
          </div>
          <p className="my-4 text-sm text-center">
            Already have an account ?
            <span className="text-blue-500 mx-1">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
