import SearchMovieCard from "../SearchMovieCard/SearchMovieCard";
import { Link } from "react-router-dom";

const SearchMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <SearchMovieCard movieData={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchMoviesList;
