import React from 'react';
import { UpArrowIcon } from '../../icons';

const Dropdown = ({ dropdown }) => {
  

  return (
    <div className="custom-dropdown">
      <label className="label" htmlFor={name}>
        {dropdown.labelText || name}
      </label>  
      <div className="hover:cursor-pointer selected-option input flex justify-between items-center" onClick={dropdown.handleToggleDropdown}>
      {dropdown.selectedOption}
        <span className='rotate-180'>
            <UpArrowIcon />
        </span>
      </div>
      {dropdown.isOpen && (
        <ul className="options-list border shadow-md z-10">
           {dropdown.options.map((option) => (
            <li
            className='px-3 py-2 hover:bg-slate-200 hover:cursor-pointer'
            key={option} onClick={() => dropdown.handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
