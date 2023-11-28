import React from "react";
import { Link } from "react-router-dom";
import landingImg from '../assets/images/landing-joboffer.svg'
const Landing = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen ">
        <div className="sm:py-14 sm:px-36">
          <div>
            <span className="h-auto w-10 bg-cyan-800 text-3xl text-white rounded-md px-5">
              V
            </span>
            <span className="text-2xl mx-3 font-bold uppercase text-cyan-800 tracking-widest ">VelZon</span>
          </div>
          <div className="mt-24 flex gap-10 justify-between items-center">
            <div className="w-1/2">
                <p className="text-3xl font-extrabold">Job <span className="text-blue-800">Tracking</span> App</p>
                <p className="mt-5 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque voluptate pariatur facere delectus inventore, provident qui perspiciatis saepe animi fuga veritatis architecto quasi nihil iste nam placeat molestiae voluptatum.</p>
                <Link to='login' className="primary-btn">
                    Login
                </Link>
                <Link to='SignUp' className="primary-btn mx-3">
                    Register
                </Link>
                
            </div>
            <div className="w-1/2">
                <img 
                className="w-96"
                src={landingImg} alt="landing" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
