import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { general, menu } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  showLeftSidebar: boolean;
}

const LeftSideBar = ({ showLeftSidebar }: IProps) => {
  const location = useLocation();
  const parameters = location.pathname.split("/");
  const term = parameters[parameters.length - 1];
  console.log("Current location", location);
  console.log("showLeftSidebar in component", showLeftSidebar);
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="border-r border-gray-700 text-gray-300 pl-2 h-full">
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-lg"
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        {showSideBar ? <MdOutlineCancel /> : <AiOutlineMenu />}
      </div>

      {showSideBar && (
        <>
          {showLeftSidebar && (
            <h2 className="hidden md:block text-xl relative left-4 top-6 font-medium">
              {" "}
              <span className="text-[#393491]">EL</span>Movie
            </h2>
          )}

          <div className="flex flex-col gap-7 mt-6 p-2">
            {showLeftSidebar && (
              <h2 className="hidden md:block ml-2 mt-8 font-medium">Menu</h2>
            )}

            {menu.map((m) => (
              <Link to={`/${m.name}`}>
                <div
                  className={`mt-1 flex py-[12px] px-3 hover:bg-[#060431] cursor-pointer ${
                    m.name === term && "border-r-4 border-blue-800 bg-[#070347]"
                  }`}
                >
                  <button className="text-lg">{m.icon}</button>
                  {showLeftSidebar && (
                    <p className="hidden md:block ml-2">{m.name}</p>
                  )}
                </div>
              </Link>
            ))}

            {showLeftSidebar && (
              <h2 className="hidden md:block ml-2 font-medium">General</h2>
            )}
            {general.map((m) => (
              <Link to={`/${m.name}`}>
                <div
                  className={`mt-1 flex py-[12px] px-3 hover:bg-[#060431] cursor-pointer ${
                    m.name === term && "border-r-4 border-blue-800 bg-[#070347]"
                  }`}
                >
                  <button className="text-lg">{m.icon}</button>
                  {showLeftSidebar && (
                    <p className="hidden md:block ml-2">{m.name}</p>
                  )}
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
