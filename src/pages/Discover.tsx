import React, { useEffect, useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import NoResults from "../components/NoResults";
import {
  getAllGenres,
  getDiscoverMovies,
  getMoviesBasedOnGenres,
} from "../services/movieService";
import { IGenre, IMovie } from "./../types.d";
import { getAllTvGenres } from "./../services/movieService";

interface IProps {
  handleToggleRightSideBar: (v: boolean) => void;
  handleToggleLeftSideBar: (v: boolean) => void;
}

const Discover = ({
  handleToggleRightSideBar,
  handleToggleLeftSideBar,
}: IProps) => {
  const [activeGenre, setActiveGenre] = useState<IGenre>({});
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const location = useLocation();
  const parameters = location.pathname.split("/");
  const discoverGenre = parameters[parameters.length - 1];

  const genreType = discoverGenre === "movies" ? "movie" : "tv";

  useEffect(() => {
    handleToggleLeftSideBar(true);
    handleToggleRightSideBar(false);
    async function fetchMyapi() {
      let genresResponse;
      if (activeGenre?.name === "tv") {
        genresResponse = await getAllTvGenres();
      } else {
        genresResponse = await getAllGenres();
      }
      setGenres(genresResponse.data.genres);
      const reponse = await getDiscoverMovies(genreType, activeGenre);
      setMovieList(reponse.data.results);
      if (activeGenre?.name) {
        const response = await getMoviesBasedOnGenres(genreType, activeGenre);
        setMovieList(response.data.results);
      }
    }
    fetchMyapi();
  }, [genreType, activeGenre]);

  console.log("All movies", movieList);

  return (
    <div className="p-3 flex flex-col gap-5 text-gray-200">
      <div className="md:w-4/5 p-3">
        {/* header */}
        <div className="flex justify-between  md:w-[88%]">
          <div className="flex gap-4 relative top-4">
            <Link to="/discover/movies">
              <p className={`${discoverGenre === "movies" && "text-blue-800"}`}>
                Movies
              </p>
            </Link>
            <Link to="/discover/Tv_shows">
              <p
                className={`${discoverGenre === "Tv_shows" && "text-blue-800"}`}
              >
                Tv shows
              </p>
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

        <div className="bg-gray-800 p-3 mt-3 rounded md:w-1/5 md:absolute md:right-5 md:top-40">
          <h2 className="pb-3 text-xl border-b border-black">Genres</h2>
          <div className="flex  flex-wrap gap-6 mt-2">
            {genres?.map((genre) => (
              <div
                key={genre.id}
                className={`flex justify-center items-center border border-blue-400 rounded-full p-2 hover:bg-blue-400 hover:text-gray-300 cursor-pointer ${
                  activeGenre.name === genre.name && "bg-blue-400"
                }`}
                onClick={() => setActiveGenre(genre)}
              >
                <p className="text-xs text-gray-300">{genre.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* movie list results */}
        <div>
          <h2 className="text-xl font-medium text-gray-100 mt-14">
            {discoverGenre || "Discover"}
          </h2>
          {movieList.length ? (
            <div className="mt-3 text-gray-200 flex gap-6 flex-wrap">
              {movieList.map((m) => (
                <Link to={`/movie/${m.id}`} className="w-[30.5%] md:w-[20%]">
                  <div className="h-72  bg-red-500 mt-2 rounded-lg">
                    <img
                      src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                      alt="trending"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-center mt-1 font-medium">
                    {m.title || m.original_name}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-5">
              <NoResults text={`No results found for ${discoverGenre}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
