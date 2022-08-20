import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { general, menu } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

const LeftSideBar = () => {
  const location = useLocation();
  console.log("Current location", location);
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="border-r border-blue-400 text-gray-300 pl-2">
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-lg"
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        {showSideBar ? <MdOutlineCancel /> : <AiOutlineMenu />}
      </div>

      {showSideBar && (
        <>
          <h2 className="hidden md:block text-xl ml-4 mt-6 font-semibold">
            {" "}
            <span className="text-[#393491]">EL</span>Movie
          </h2>
          <div className="flex flex-col gap-7 mt-3 p-2">
            <h2 className="hidden md:block ml-2 font-semibold">Menu</h2>

            {menu.map((m) => (
              <Link to={`/${m.name}`}>
                <div className="mt-1 flex py-[10px] px-3 hover:bg-[#060431] cursor-pointer">
                  <button className="text-lg">{m.icon}</button>
                  <p className="hidden md:block ml-2">{m.name}</p>
                </div>
              </Link>
            ))}

            <h2 className="hidden md:block ml-2 font-semibold">General</h2>
            {general.map((m) => (
              <Link to={`/${m.name}`}>
                <div className="mt-1 flex py-[10px] px-3 hover:bg-[#060431] cursor-pointer">
                  <button className="text-lg">{m.icon}</button>
                  <p className="hidden md:block ml-2">{m.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LeftSideBar;
