import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import { getTopDayMovies } from "../../movie-api.js";
import { useState, useEffect } from "react";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setError(false);
        const response = await getTopDayMovies();
        setMovies(response);
      } catch (e) {
        setError(true);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      {!error && <Hero />}
      {!error && movies.total_pages && (
        <section>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>Trending</h2>
          </div>
          <MoviesList movies={movies.results} />
        </section>
      )}
      {error && <ErrorMessage />}
    </main>
  );
};

export default HomePage;

// /9Le7N3fmrHnWwdxCg35jSSawFyK.jpg
