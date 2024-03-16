import { Link, useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import SearchMovieCard from "../SearchMovieCard/SearchMovieCard";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {location.pathname === "/" ? (
              <MovieCard movieData={movie} />
            ) : (
              <SearchMovieCard movieData={movie} />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
