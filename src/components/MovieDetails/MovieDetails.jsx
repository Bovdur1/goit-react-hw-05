import { Link } from "react-router-dom";
import css from "./MovieDetails.module.css";
import { FaArrowLeft } from "react-icons/fa";

const MovieDetails = ({ movie, backLink }) => {
  const {
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
    genres = [],
    overview,
    release_date: releaseDate,
  } = movie;

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const releaseYear = releaseDate.slice(0, 4);
  const userScore = (voteAverage * 10).toFixed(1);
  const genresList = genres.map((genre) => genre.name).join(" ");
  return (
    <section>
      <div className={css.goBackBtn}>
        <FaArrowLeft />
        <Link to={backLink}>Go back</Link>
      </div>
      <div className={css.detailsWrapper}>
        <img
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : defaultImg
          }
          width={250}
          alt="poster"
          className={css.poster}
        />

        <div className={css.details}>
          <h1>
            {title} {releaseDate !== "" && <span>({releaseYear})</span>}
          </h1>
          <p>
            <b>User score:</b> {userScore}%
          </p>
          <div>
            <h2>Overview</h2>
            {overview !== "" ? <p>{overview}</p> : <p>Not found...</p>}
          </div>
          <div>
            <h3>Genres</h3>
            {genres.length !== 0 ? <p>{genresList}</p> : <p>Not found...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
