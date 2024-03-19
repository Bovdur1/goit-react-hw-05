import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movie-api";
import { FaStar } from "react-icons/fa";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      if (!movieId) return;

      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (e) {
        console.error(e);
      }
    };
    getReviews();
  }, [movieId]);

  const {
    id,
    total_results: totalResults,
    results: usersReviews = [],
  } = reviews;

  return (
    <section>
      {id && totalResults !== 0 && (
        <ul className={css.list}>
          {usersReviews.map((review) => (
            <li key={review.id} className={css.item}>
              <h3 className={css.author}>{review.author}</h3>
              <div className={css.reviewInfo}>
                <p>{review.created_at.slice(0, 10)}</p>
                {review.author_details.rating && (
                  <p>
                    <FaStar />
                    {review.author_details.rating}.0
                  </p>
                )}
              </div>

              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {totalResults === 0 && (
        <p className={css.notFoundMsg}>
          We don't have any reviews for this movie...
        </p>
      )}
    </section>
  );
};

export default MovieReviews;
