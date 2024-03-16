import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { searchMovies } from "../movie-api";
import { useSearchParams } from "react-router-dom";
import MoviesList from "../components/MoviesList/MoviesList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const getSearchMovies = async () => {
      try {
        const response = await searchMovies(query);
        setMovies(response.results);
      } catch (e) {
        console.error(e);
      }
    };
    getSearchMovies();
  }, [query]);

  return (
    <>
      <SearchBox />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
