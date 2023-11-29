// SelectDropdown.jsx
import React from 'react';

const SelectDropdown = ({ options, name, label, register, errors }) => {
  return (
    <div className="select-dropdown">
      <label className="label">{label || name}</label>
      <select name={name} className='border w-full input' {...register(name)}>
        <option value="all">all</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[label] && <p>{errors[label].message}</p>}
    </div>
  );
};

export default SelectDropdown;
