import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";

import { getPopularMovies } from "./../services/movieService";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMyapi() {
      let { data } = await getPopularMovies();
      console.log("The data", data);
      setMovies(data.results);
    }

    fetchMyapi();
  }, []);

  console.log("The movies", movies);

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

      {/* trending movies */}
      <h2 className="text-xl font-semibold text-gray-100">Trending</h2>
      <div className="w-full bg-red-400 h-60 rounded relative">
        <img
          src="https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg"
          alt="trending"
          className="w-full h-full object-cover rounded"
        />

        <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.4)] w-full h-full"></div>

        <div className="absolute top-32 left-10 w-1/2  h-20">
          <p className="font-bold text-3xl text-white">{movies[0]?.title}</p>
          <p className="lg:mt-3">
            {movies[0]?.release_date.split("-")[0] +
              ` - ${movies[0]?.overview.substring(0, 70)}...`}
          </p>
        </div>

        {/* button */}
        <div className="mr-2 w-1/2 relative -top-20 left-[45%] bg-red-500 ">
          <button className="p-3 bg-blue-500 rounded-lg font-semibold flex gap-3 items-center justify-center float-right">
            {" "}
            <FaPlay />
            Watch Now
          </button>
        </div>
      </div>

      {/* Popular movies */}
      <div>
        <h2 className="text-xl font-semibold text-gray-100 ">Popular</h2>
        <div className="flex flex-wrap gap-4 pt-2">
          {movies.slice(0, 3).map((m) => (
            <div className="w-1/4 h-64 bg-red-500 mt-2">
              <img
                src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                alt="trending"
                className="w-full h-full object-cover rounded"
              />
              <p className="text-center">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
