import React, { useEffect, useState } from "react";
import { getMovieDetails, getSimilarMovies } from "./../services/movieService";
import { Link, useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineConsoleSql } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

interface IProps {
  handleToggleRightSideBar: (v: boolean) => void;
  handleToggleLeftSideBar: (v: boolean) => void;
}

const MovieDetails = ({
  handleToggleRightSideBar,
  handleToggleLeftSideBar,
}: IProps) => {
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  const location = useLocation();
  const parameters = location.pathname.split("/");
  const movieId = parameters[parameters.length - 1];
  console.log("movieId", movieId);

  useEffect(() => {
    handleToggleRightSideBar(false);
    handleToggleLeftSideBar(false);

    async function fetchMyapi() {
      let { data } = await getMovieDetails(movieId);
      setMovie(data);
      const result = await getSimilarMovies(movieId);
      setSimilarMovies(result.data.results);
    }

    fetchMyapi();
  }, [movieId]);

  console.log("movie detials", movie);

  return (
    <div className="p-3 md:w-[90%]">
      <div className="w-full h-[500px] bg-green-400 rounded"></div>

      {/* movie details & similar movies container  */}
      <div className="flex flex-col gap-6">
        {/* movie details */}
        <div>
          {/* header */}
          <div className=" mt-4 flex gap-5">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-520 h-52 rounded"
            />
            <div className="flex flex-col gap-4">
              <p className="text-gray-200 text-xl font-medium">{movie.title}</p>
              {/* genres */}
              <div className="flex gap-4 ">
                {movie.genres?.map((genre) => (
                  <div className="flex justify-center items-center border border-blue-400 rounded-full p-3 hover:bg-blue-400 hover:text-gray-300 cursor-pointer">
                    <p className="text-xs text-gray-300">{genre.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center  border border-blue-400 rounded-full p-3 hover:bg-blue-400 hover:text-gray-300 cursor-pointer mt-3 text-gray-200 w-1/2">
                <AiFillStar />
                <p className="ml-2">{movie.vote_average}</p>
              </div>
            </div>
          </div>
          {/* Overview */}
          <div className="mt-2 py-3 text-gray-200">
            <h2 className="text-xl font-medium">Overview</h2>
            <p className="mt-3 text-gray-300">{movie.overview}</p>
          </div>
        </div>
        {/* similar movies */}
        <div className="">
          <p className="text-gray-200 text-xl">Similar</p>

          <div className="mt-3 text-gray-200">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {similarMovies.slice(0, 20).map((m) => (
                <SwiperSlide>
                  <Link to={`/movie/${m.id}`} className="w-1/4">
                    <div className="h-72 bg-red-500 mt-2 rounded-lg">
                      <img
                        src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                        alt="trending"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-center mt-1 font-medium">{m.title}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
