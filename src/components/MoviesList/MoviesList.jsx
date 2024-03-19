import { Link, useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MovieCard movieData={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

// {
//   location.pathname === "/" ? (
//     <MovieCard movieData={movie} />
//   ) : (
//     <SearchMovieCard movieData={movie} />
//   );
// }
