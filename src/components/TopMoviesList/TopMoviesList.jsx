import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const TopMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieCard movieData={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopMoviesList;
