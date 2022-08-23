import http from "./httpService";

const env = import.meta.env;

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
