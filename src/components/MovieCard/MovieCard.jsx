const MovieCard = ({ movieData }) => {
  const { title, poster_path, vote_average, popularity } = movieData;
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h2>{title}</h2>
      <p>Rating: {vote_average}</p>
      <p>Views: {popularity}</p>
    </>
  );
};

export default MovieCard;
