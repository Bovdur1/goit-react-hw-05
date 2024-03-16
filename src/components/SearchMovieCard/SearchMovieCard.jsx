const SearchMovieCard = ({ movieData }) => {
  const { title, backdrop_path, release_date, overview } = movieData;

  return (
    <>
      {backdrop_path !== null && (
        <img
          src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
          alt="movie_img"
        />
      )}

      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{overview}</p>
    </>
  );
};

export default SearchMovieCard;
