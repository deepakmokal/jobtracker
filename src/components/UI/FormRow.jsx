import React, {  useState } from "react";
import { EyeClose, EyeOpen } from "../../icons";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormRow = ({
  type,
  name,
  classname,
  handleChange,
  labelText,
  register,
  errors,
  ...rest
}) => {
  
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const showToast = (message, type) => {
    
    toast(message, {type})
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <>
      <div className="mb-4">
        <label className="label" htmlFor={name}>
          {labelText || name}
        </label>
        {type === "password" ? (
          <div className="relative">
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 text-slate-300 right-0 flex items-center px-2.5 
                    hover: cursor-pointer hover:text-slate-400"
            >
              {showPassword ? <EyeClose /> : <EyeOpen />}
            </div>
            <input
              type={showPassword ? "text" : "password"}
              {...register(name, { required: true })}
              onChange={(e) => setPassword(e.target.value)}
              className={classname}
              {...rest}
            />
              
          </div>
        ) : (
          <input
            className={classname}
            {...register(name, { required: true })}
            name={name}
            type={type}
            onChange={handleChange}
            {...rest}
          />
          
        )}
        
      </div>
      {errors[name] ? showToast(`${name} field is required`, "error") : <></>}
    </>
  );
};

export default FormRow;
