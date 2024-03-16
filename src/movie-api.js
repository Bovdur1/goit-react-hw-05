import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGRiMTNmNmVhZDM5ZGQyNjdlOWFhNWJiZjhkMmU4YiIsInN1YiI6IjY1ZjIwMTZlZTlkYTY5MDE2MzVlNjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZGwSNKpY0aq4gO6GfnzZbfzMyLVsNbXHBgMIFMxohw";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export const getTopDayMovies = async () => {
  const response = await axios.get("/trending/movie/day?language=en-US");
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query,
    },
  });
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};
