import React, { useContext, useEffect, useState } from "react";
import SidebarContext from "../Context/SidebarContext";
import { CloseIcon, HamburgerIcon, LogoutIcon } from "../icons";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Header = () => {
  const { sidebar, showSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    
    const localUser = getUserFromLocalStorage();
    if (localUser) {
      setUserName(localUser.name);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    toast(`Logging out ${userName}...`);
    removeUserFromLocalStorage();
    setTimeout(() => {
      navigate("/login");  
    }, 3000);
    
  };

  return (
    <div className="h-[60px] w-full bg-slate-300 px-3">
      <div className="flex h-full items-center justify-between">
        <button className="w-6 h-6 " onClick={() => showSidebar()}>
          {/* {isCollapse ? <CloseIcon/> : <HamburgerIcon  />} */}
          {sidebar ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <div className="flex gap-2">
          <div className="dropdown-container relative">
            <div
              className="welcome hover:cursor-pointer p-3"
              onClick={toggleDropdown}
            >
              Welcome, {userName}
            </div>
            
            {isDropdownOpen && (
              <div className="dropdown-menu w-full rounded border absolute top-10 right-2 bg-white shadow p-2">
                <div onClick={handleLogout} className="flex justify-between hover:cursor-pointer">
                <button className="text-xs">Logout</button>
                <div className="h-4 w-4 text-slate-500">
                  <LogoutIcon />
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
