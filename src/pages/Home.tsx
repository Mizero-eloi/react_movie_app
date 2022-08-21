import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="p-3 flex flex-col gap-6 text-gray-200">
      {/* header */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Link to="/movies">
            <p>Movies</p>
          </Link>
          <Link to="/series">
            <p>Series</p>
          </Link>
          <Link to="/Tv_shows">
            <p>Tv shows</p>
          </Link>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg border border-gray-50  flex justify-center items-center text-lg">
            <AiOutlineWifi />
          </div>
          <div className="w-10 h-10 rounded-lg border border-gray-50 flex justify-center items-center text-lg">
            <IoMdNotificationsOutline />
          </div>
        </div>
      </div>

      {/* search bar  */}
      <form onSubmit={() => {}}>
        <div className="relative mt-5 bg-gray-700 rounded">
          <input
            type="text"
            className="p-3 text-gray-200 w-[90%] rounded  outline-none bg-gray-700"
            placeholder="Search"
            onChange={() => {}}
          />
          <button className="absolute right-4 top-4 text-lg" onClick={() => {}}>
            <BsSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
