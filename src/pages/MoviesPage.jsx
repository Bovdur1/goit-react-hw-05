import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { searchMovies } from "../movie-api";
import { useSearchParams } from "react-router-dom";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [isloading, setIsloading] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const getSearchMovies = async () => {
      try {
        setIsloading(true);
        const response = await searchMovies(query);
        setMovies(response.results);
        console.log(response);
      } catch (e) {
        console.error(e);
      } finally {
        setIsloading(false);
      }
    };
    getSearchMovies();
  }, [query]);

  return (
    <main>
      <SearchBox />
      {isloading && <Loader />}
      {query && !isloading && (
        <section>
          <MoviesList movies={movies} />
        </section>
      )}
    </main>
  );
};

export default Movies;
