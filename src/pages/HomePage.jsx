import MoviesList from "../components/MoviesList/MoviesList.jsx";
import { getTopDayMovies } from "../movie-api.js";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTopDayMovies();
        setMovies(response.results);
      } catch (e) {
        console.error(e);
      }
    };
    getMovies();
  }, []);

  // const memoValue = useMemo(() => {
  //   const randomPosterIndex = Math.random() * 10;
  //   const value = Math.floor(randomPosterIndex);
  //   return value;
  // }, []);

  return (
    <>
      <h1>Welcome</h1>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
