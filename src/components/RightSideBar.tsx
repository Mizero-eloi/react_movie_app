import React, { useEffect, useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { AiFillStar } from "react-icons/ai";

import useAuthStore from "../store/authStore";
import { createOrGetUser } from "./../services/userService";
import { getTopRated } from "../services/movieService";
import { IMovie } from "../types";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  const { userProfile }: any = useAuthStore();
  const { addUser } = useAuthStore();
  const [topRatedMovies, setTopRatedMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function fetchMyapi() {
      let { data } = await getTopRated();
      setTopRatedMovies(data.results);
    }

    fetchMyapi();
  }, []);

  return (
    <div>
      {/* authetication button */}
      <div className="p-4 border-b border-gray-700">
        {userProfile ? (
          <div className="flex gap-4 justify-start items-center">
            <div className="w-12 h-12 rounded-full bg-green-500">
              <img
                src={userProfile?.image}
                alt="userProfile"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-200 capitalize font-medium">
              {userProfile?.userName}
            </p>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
      {/* top rated movies */}
      <div className="p-4 text-gray-200">
        <h2 className="text-xl">Top rated</h2>
        <div className="mt-2 flex flex-col gap-6 h-[638px] overflow-y-scroll noScrollbar">
          {topRatedMovies.slice(0, 4).map((m) => (
            <Link to={`/movie/${m.id}`}>
              <div className="flex gap-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                  alt={m.title}
                  className="w-1/2 h-40 rounded-lg"
                />
                <div className="w-1/2 flex flex-col gap-4">
                  <h2 className="text-sm font-medium">{m.title}</h2>
                  <p className="text-xs text-gray-300">
                    {m.overview.substring(0, 40) + "..."}
                  </p>
                  <div className="w-20  border border-blue-400 rounded-full flex gap-3 justify-center items-center">
                    {m.vote_average}
                    <AiFillStar />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
