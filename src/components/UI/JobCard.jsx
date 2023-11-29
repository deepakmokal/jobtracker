import React from "react";
import {
  BriefcaseIcon,
  EditIcon,
  LocationIcon,
  TrashIcon,
  CalendarIcon,
} from "../../icons";

import { format } from 'date-fns';

function formatDate(dateString) {
  
  const date = new Date(dateString);
  return format(date, 'MMM do, yyyy');
}

import classNames from 'classnames'

const JobCard = ({ position, company, status, location, jobtype, date }) => {
  const statusClass = classNames({
    
    'bg-blue-200': status === 'pending',
    'bg-green-200': status === 'interview',
    'bg-red-200': status === 'declined',
    
  });


  return (
    <div className="shadow-md rounded w-full border">
      <div className="p-4 flex justify-end gap-2 items-center ">
        <button className="bg-cyan-100 rounded py-1 flex gap-1 px-2 text-xs">
          <span className="flex text-xs w-4">
            <EditIcon />
          </span>
        </button>
        <button className="bg-red-100 rounded py-1 flex gap-1 px-2 text-xs">
          <span className="flex text-xs w-4">
            <TrashIcon />
          </span>
        </button>
      </div>

      <div className="px-3">
        <div className="flex gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-t from-cyan-500 to-indigo-900 grid place-items-center">
            <span className="text-3xl font-bold text-white">{company.slice(0,1)}</span>
          </div>
          <div>
            <p className="text-md font-extrabold  ">{position}</p>
            <p className="text-md font-light mb-1 text-slate-500">{company}</p>

            <p className={`w-fit px-3 py-1 text-xs rounded ${statusClass}`}>
              {status.toUpperCase()}
            </p>
          </div>
        </div>
        <div className=" mb-2 pt-4 flex justify-between items-center">
          <div className=" rounded py-1 flex gap-1 px-2 text-xs text-slate-500 items-center">
            <span className="flex text-sm w-4">
              <LocationIcon />
            </span>
            {location}
          </div>
          <div className=" rounded py-1 flex gap-1 px-2 text-xs text-slate-500 items-center">
            <span className="flex text-sm w-4">
              <BriefcaseIcon />
            </span>
            {jobtype}
          </div>
          <div className=" whitespace-nowrap rounded py-1 flex gap-1 px-2 text-xs items-center text-slate-500">
            <span className="flex text-sm w-4">
              <CalendarIcon />
            </span>
            {formatDate(date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
