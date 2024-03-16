const MovieCard = ({ movieData }) => {
  const { title, backdrop_path, vote_average, popularity } = movieData;
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt="movie_img"
      />
      <h2>{title}</h2>
      <p>Rating: {vote_average}</p>
      <p>Views: {popularity}</p>
    </>
  );
};

export default MovieCard;

// adult: false;
// backdrop_path: "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg";
// genre_ids: [16, 10751, 14];
// id: 129;
// media_type: "movie";
// original_language: "ja";
// original_title: "千と千尋の神隠し";
// overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.";
// popularity: 152.967;
// poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg";
// release_date: "2001-07-20";
// title: "Spirited Away";
// video: false;
// vote_average: 8.541;
// vote_count: 15652;
