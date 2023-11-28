import React, { useContext } from "react";
import Nav from "../layout/Nav";
import SidebarContext from "../Context/SidebarContext";

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);
  console.log(sidebar);
  return (
    <>
      {sidebar ? (
        <div
          className={`max-w-full sm:max-w-[230px] sm:w-full py-6 h-screen bg-cyan-800 text-white`}
        >
          <div className="mb-8 w-full text-center">
            <p className="text-2xl uppercase font-bold tracking-widest">
              VelZon
            </p>
          </div>
          <Nav />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
