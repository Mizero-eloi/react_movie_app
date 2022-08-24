import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IMovie } from "../types";

const ImageCard = ({ m }) => {
  return (
    <Link to={`/movie/${m.id}`} className="w-1/4 relative">
      <div className="h-72 bg-red-500 mt-2 rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
          alt="trending"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="bg-[rgba(0,0,0,0.5)] absolute w-full h-72 top-2">
        <div className="flex justify-center items-center  border border-blue-400 rounded-full hover:bg-blue-400 hover:text-gray-300 cursor-pointer mt-3 text-gray-200 w-1/4 relative left-44">
          <AiFillStar />
          <p className="ml-2">{m.vote_average}</p>
        </div>
      </div>
      <p className="text-center mt-1 font-medium">
        {m.title || m.original_name}
      </p>
    </Link>
  );
};

export default ImageCard;
