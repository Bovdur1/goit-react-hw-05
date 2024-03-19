import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../movie-api.js";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCredits(response);
      } catch (e) {
        console.error(e);
      }
    };
    getCredits();
  }, [movieId]);

  const { id, cast = [] } = credits;

  const defaultProfileImg =
    "https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png";

  return (
    <section>
      {id && cast.length != 0 && (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.item}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : defaultProfileImg
                }
                width={150}
                alt="actor_photo"
              />
              <h3>{actor.name}</h3>
              <p className={css.character}>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
      {id && cast.length === 0 && (
        <p className={css.notFoundMsg}>Not found...</p>
      )}
    </section>
  );
};

export default MovieCast;
