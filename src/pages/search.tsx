import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { getSearchedMovie } from "../services/movieService";
import NoResults from "./../components/NoResults";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IMovie } from "../types";

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
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
  };

  useEffect(() => {
    handleToggleLeftSideBar(true);
    handleToggleRightSideBar(false);
    async function fetchMyapi() {
      let response = await getSearchedMovie(search);
      setSearchResults(response.data.results);
    }
    if (search) {
      fetchMyapi();
    }
  }, [search, searchResults]);

  console.log("search results", searchResults);

  return (
    <div className="p-3 flex flex-col gap-5 text-gray-200">
      <div className="md:3/5 p-3">
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
        <form onSubmit={handleSearch}>
          <div className="relative mt-5 bg-gray-700 rounded">
            <input
              type="text"
              value={search}
              className="p-3 text-gray-200 w-[90%] rounded  outline-none bg-gray-700"
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

        {/* search results */}
        <div>
          <h2 className="text-xl font-medium text-gray-100">
            Search result for {search}
          </h2>
          {searchResults.length ? (
            <div className="mt-3 text-gray-200 flex gap-6 flex-wrap">
              {searchResults.map((m) => (
                <Link to={`/movie/${m.id}`} className="w-1/4">
                  <div className="h-72  bg-red-500 mt-2 rounded-lg">
                    <img
                      src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                      alt="trending"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-center mt-1 font-medium">{m.title}</p>
                </Link>
              ))}
            </div>
          ) : (
            <NoResults text={`No results found for ${search}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
