import TopMoviesList from "../components/TopMoviesList/TopMoviesList.jsx";
import { getTopDayMovies } from "../movie-api.js";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTopDayMovies();
        setMovies(response.results);
        return response;
      } catch (e) {
        console.error(e);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <TopMoviesList movies={movies} />
    </>
  );
};

export default HomePage;
