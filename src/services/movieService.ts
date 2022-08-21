import http from "./httpService";

const env = import.meta.env;

export const getPopularMovies = async () => {
  const response = await http.get(
    `${env.VITE_MOVIE_APP_API_URL}movie/popular?api_key=${env.VITE_API_KEY}`
  );

  console.log("The response", response);
  return response;
};
