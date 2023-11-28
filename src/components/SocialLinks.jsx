import React from "react";
import {  FacebookIcon, GithubIcon, GoogleIcon, TwitterIcon } from "../icons";
const SocialLinks = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <div className="facebook">
          <button className="w-9 h-9">
            <FacebookIcon className="rounded-lg" />
          </button>
        </div>
        <div className="google">
          <button className="w-9 h-9">
            <GoogleIcon className="rounded-lg" />
          </button>
        </div>
        <div className="github">
          <button className="w-9 h-9">
            <GithubIcon className="rounded-lg" />
          </button>
        </div>
        <div className="twitter">
          <button className="w-9 h-9">
            <TwitterIcon className="rounded-lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
