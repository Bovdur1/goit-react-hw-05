const MovieDetails = ({ movie }) => {
  const {
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
    genres,
    overview,
    release_date: releaseDate,
  } = movie;

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const releaseYear = releaseDate && releaseDate.slice(0, 4);
  const userScore = voteAverage * 10;
  const genresList = genres && genres.map((genre) => genre.name).join(" ");

  return (
    <>
      <img
        src={
          posterPath
            ? `https://image.tmdb.org/t/p/w300${posterPath}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h1>
        {title}({releaseYear})
      </h1>
      <p>User score: {userScore}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genresList}</p>
    </>
  );
};

export default MovieDetails;
