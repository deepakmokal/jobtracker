import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import menus from "../menu";
const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <ul>
        {menus.map((menu) => (
          <li
            className="mb-2 px-4 py-3 hover:cursor-pointer hover:bg-cyan-950"
            key={menu.id}
          >
            <NavLink
              to={menu.name.split(" ").join("_")}
            >
              <div className="flex items-center">
                <div className="icon w-6 text-white ">{menu.icon}</div>
                <div className="mx-3">{menu.name}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
