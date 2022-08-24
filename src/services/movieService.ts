import http from "./httpService";

const env = import.meta.env;
import { IGenre } from "./../types.d";

export const getPopularMovies = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/popular?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getUpcomingMovies = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/upcoming?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getOnTheAirTv = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}tv/on_the_air?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getTopRated = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/top_rated?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getMovieDetails = async (id: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/${id}?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getSimilarMovies = async (id: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/${id}/similar?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getMovieVideos = async (id: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/${id}/videos?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getMultiSearch = async (searchTerm: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}search/multi/?query=${searchTerm}&api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getSearchedMovie = async (searchTerm: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}search/movie/?query=${searchTerm}&api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getSearchedTv = async (searchTerm: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}search/tv/?query=${searchTerm}&api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getSearchedPeople = async (searchTerm: string) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}search/person/?query=${searchTerm}&api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getAllGenres = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}genre/movie/list?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getAllTvGenres = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}genre/tv/list?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};

export const getDiscoverMovies = async (
  genreType: string,
  activeGenre: IGenre
) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}discover/${genreType}?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);

  return response;
};

export const getMoviesBasedOnGenres = async (
  genreType: string,
  activeGenre: IGenre
) => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}discover/${genreType}?api_key=${env.VITE_API_KEY}&with_genres=${activeGenre.id}`
  );

  console.log("The response", response);
  return response;
};
