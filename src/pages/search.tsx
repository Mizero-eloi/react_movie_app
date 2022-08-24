import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import {
  getMultiSearch,
  getSearchedMovie,
  getSearchedTv,
} from "../services/movieService";
import NoResults from "./../components/NoResults";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IMovie } from "../types";
import { getSearchedPeople } from "./../services/movieService";

interface IProps {
  handleToggleRightSideBar: (v: boolean) => void;
  handleToggleLeftSideBar: (v: boolean) => void;
}

const Search = ({
  handleToggleRightSideBar,
  handleToggleLeftSideBar,
}: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const parameters = location.pathname.split("/");
  const searchTerm = parameters[parameters.length - 1];

  const [search, setSearch] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState<any>([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/search/" + search);
  };

  useEffect(() => {
    handleToggleLeftSideBar(true);
    handleToggleRightSideBar(false);
    async function fetchMyapi() {
      let response;
      switch (activeFilter) {
        case "all":
          response = await getMultiSearch(search);
          break;
        case "movie":
          response = await getSearchedMovie(search);
          break;
        case "tvshow":
          response = await getSearchedTv(search);
          break;
        case "people":
          response = await getSearchedPeople(search);
          break;
        default:
          response = await getMultiSearch(search);
      }

      setSearchResults(response.data.results);
    }
    if (search) {
      fetchMyapi();
    }
  }, [search, searchResults]);

  console.log("search results", searchResults);

  return (
    <div className="p-3 flex flex-col gap-5 text-gray-200">
      <div className="md:w-4/5 p-3">
        {/* header */}
        <div className="flex justify-between  md:w-[88%]">
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
        <form onSubmit={handleSearch}>
          <div className="relative mt-5 bg-gray-700 md:w-[88%] rounded">
            <input
              type="text"
              value={search}
              className="p-3 text-gray-200 w-[90%]  rounded  outline-none bg-gray-700"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="absolute right-4 top-4 text-lg"
              onClick={handleSearch}
            >
              <BsSearch />
            </button>
          </div>
        </form>

        <div className="bg-gray-800 p-3 mt-3 rounded md:w-1/5 md:absolute md:right-5 md:top-44">
          <h2 className="pb-3 text-xl border-b border-black">Filter results</h2>
          <div className="flex md:flex-col gap-6 mt-2">
            <div
              className={`flex justify-center items-center text-gray-200 hover:bg-gray-700 cursor-pointer p-3 rounded ${
                activeFilter === "all" && "bg-gray-700"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              <p className="p-2">All</p>
            </div>
            <div
              className={`flex justify-center items-center text-gray-200 hover:bg-gray-700 cursor-pointer p-3 rounded ${
                activeFilter === "movie" && "bg-gray-700"
              }`}
              onClick={() => setActiveFilter("movie")}
            >
              <p className="p-2">Movie</p>
            </div>
            <div
              className={`flex justify-center items-center text-gray-200 hover:bg-gray-700 cursor-pointer p-3 rounded ${
                activeFilter === "tvshow" && "bg-gray-700"
              }`}
              onClick={() => setActiveFilter("tvshow")}
            >
              <p className="p-2">TV Show</p>
            </div>
            <div
              className={`flex justify-center items-center text-gray-200 hover:bg-gray-700 cursor-pointer p-3 rounded ${
                activeFilter === "people" && "bg-gray-700"
              }`}
              onClick={() => setActiveFilter("people")}
            >
              <p className="p-2">People</p>
            </div>
          </div>
        </div>

        {/* search results */}
        <div>
          <h2 className="text-xl font-medium text-gray-100 mt-4">
            Search result for {search}
          </h2>
          {searchResults.length ? (
            <div className="mt-3 text-gray-200 flex gap-6 flex-wrap">
              {searchResults.map((m: any) => (
                <Link to={`/movie/${m.id}`} className="w-[30.5%] md:w-[20%]">
                  <div className="h-72  bg-red-500 mt-2 rounded-lg">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        m.poster_path ? m.poster_path : m.profile_path
                      }`}
                      alt="trending"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-center mt-1 font-medium">
                    {m.title || m.original_name || m.name}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-5">
              <NoResults text={`No results found for ${search}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
