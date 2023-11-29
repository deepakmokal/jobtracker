import React, {  useEffect, useState } from "react";
import { EyeClose, EyeOpen } from "../../icons";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormRow = ({
  type,
  name,
  isRequired,
  classname,
  handleChange,
  labelText,
  register,
  errors,
  ...rest
}) => {
  const [requiredField, setRequiredField] = useState(false)
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const showToast = (message, type) => {
    
    toast(message, {type})
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if(isRequired=== 'true') {
      setRequiredField(true)
    }
    else {
      setRequiredField(false)
    }
  })

  

  

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
              {...register(name, {  required: requiredField})}
              onChange={(e) => setPassword(e.target.value)}
              className={classname}
              {...rest}
            />
              
          </div>
        ) : (
          <input
            className={classname}
            {...register(name, { required: requiredField })}
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
