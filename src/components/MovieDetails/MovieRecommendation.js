import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieRecommendation from "../../hooks/useMovieRecommendation";
import MovieCard from "../SecondaryController/MovieCard";

const MovieRecommendation = ({ movieid }) => {
  const movieDetailsSlice = useSelector((store) => store.movieDetailsSlice);
  const [movieRecommendations, setmovieRecommendations] = useState();
  useMovieRecommendation(movieid);

  useEffect(() => {
    setmovieRecommendations(movieDetailsSlice.recommendations);
  }, [movieDetailsSlice.recommendations]);

  return (
    movieRecommendations && (
      <div >
        <p className="text-xl font-semibold">MovieRecommendation</p>
        <div className="flex p-5 overflow-x-auto ">
          {" "}
          {movieRecommendations.results.map((movie) => {
            return <MovieCard movieDetails={movie} />;
          })}
        </div>
      </div>
    )
  );
};

export default MovieRecommendation;
