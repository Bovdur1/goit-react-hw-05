import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../movie-api.js";
import MovieDetails from "../components/MovieDetails/MovieDetails.jsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;

    const getMovieData = async () => {
      try {
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch (e) {
        console.error(e);
      }
    };
    getMovieData();
  }, [movieId]);

  return (
    <>
      {movie.id && <MovieDetails movie={movie} />}

      {movie.id && (
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      )}

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
