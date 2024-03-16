import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../movie-api.js";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState({});
  console.log(movieId);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCredits(response);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  const { id, cast } = credits;

  return (
    <>
      {id && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                }
                width={150}
                alt="actor_photo"
              />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
