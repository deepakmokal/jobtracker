import errorImg from "../assets/images/page-not-found.svg";
import warningImg from "../assets/images/warning.svg";

import { NavLink, useNavigate, useRouteError } from "react-router-dom";

import React from "react";

const GlobalError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (error.status === 404)
    return (
      <div className=" h-screen flex flex-col justify-center items-center">
        <div>
          <img src={errorImg} width="450px" height="450px" />
        </div>
        <NavLink
          to="/"
          className="primary-btn my-10"
        >
          Back to Home
        </NavLink>
      </div>
    );

  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center">
        <div>
          <img src={warningImg} width="450px" height="450px" />
        </div>
        <button
          onClick={() => navigate(-1)}
          className=" mt-3 rounded bg-green-500 text-white px-2 py-1"
        >
          Go To Back
        </button>
      </div>
    </>
  );
};

export default GlobalError;
