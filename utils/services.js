const BASE_URL = "https://api.themoviedb.org/3";
export const baseUrl = "https://image.tmdb.org/t/p/original/";

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=28`,
};

export default requests;
