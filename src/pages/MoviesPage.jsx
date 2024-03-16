import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { searchMovies } from "../movie-api";
import { useSearchParams } from "react-router-dom";
import SearchMoviesList from "../components/SearchMoviesList/SearchMoviesList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const getSearchMovies = async () => {
      const response = await searchMovies(query);
      setMovies(response.results);
    };

    getSearchMovies();
  }, [query]);

  return (
    <>
      <SearchBox />
      <SearchMoviesList movies={movies} />
    </>
  );
};

export default Movies;
