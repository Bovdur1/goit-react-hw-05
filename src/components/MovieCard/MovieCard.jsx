import css from "./MovieCard.module.css";
const MovieCard = ({ movieData }) => {
  const { title, poster_path, vote_average, popularity } = movieData;
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const userScore = (vote_average * 10).toFixed(1);

  return (
    <div className={css.container}>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultImg
        }
        width={200}
        alt="poster"
        className={css.img}
      />
      <div className={css.wrapper}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.details}>User score: {userScore}%</p>
        <p className={css.details}>Views: {popularity}</p>
      </div>
    </div>
  );
};

export default MovieCard;
