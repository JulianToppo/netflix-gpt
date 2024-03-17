import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useMovieCredits from "../../hooks/useMovieCredits";
import CastCard from "./CastCard";
import useMovieReviews from "../../hooks/useMovieReviews";
import MovieReview from "./MovieReview";

const MovieCastAndCrew = ({ movieid }) => {
  const movieDetailsSlice = useSelector((store) => store.movieDetailsSlice);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReview, setMovieReview] = useState(null);
  useMovieCredits(movieid);
  useMovieReviews(movieid);

  useEffect(() => {
    setMovieCast(movieDetailsSlice.cast);
  }, [movieDetailsSlice.cast]);

  useEffect(() => {
    setMovieReview(movieDetailsSlice.reviews);
  }, [movieDetailsSlice.reviews]);

  return (
    movieCast && (
      <div>
        <p className="text-xl font-semibold">MovieCastAndCrew</p>
        <div className="flex overflow-scroll ">
          {movieCast.cast.map((cast) => {
            return <CastCard crewcard={cast} />;
          })}
        </div>
        {movieReview && (
          <div className="p-5 space-y-4 mx-10">
            <p className="text-xl font-semibold">Reviews</p>
            {<MovieReview review={movieReview[0]} />}
          </div>
        )}
      </div>
    )
  );
};

export default MovieCastAndCrew;
