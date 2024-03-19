import { useEffect, useState, useRef, Suspense } from "react";
import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieById } from "../../movie-api.js";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkActive);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;

    const getMovieData = async () => {
      try {
        setError(false);
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch (e) {
        setError(true);
      }
    };
    getMovieData();
  }, [movieId]);

  return (
    <main>
      {movie.id && !error && (
        <MovieDetails movie={movie} backLink={backLinkRef.current} />
      )}
      {movie.id && !error && (
        <section>
          <ul className={css.nav}>
            <li>
              <NavLink to="cast" className={makeLinkClass}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={makeLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </section>
      )}

      {error && <ErrorMessage />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
