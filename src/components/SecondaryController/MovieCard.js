import React from "react";
import { tmdbDBUrl } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovieId, toggleShow } from "../../utils/movieDetailsSlice";

const MovieCard = ({ movieDetails }) => {
  console.log(movieDetails, movieDetails.title);
  const dispatch = useDispatch();

  if (!movieDetails.poster_path) {
    return;
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("id",movieDetails.id)
    dispatch(setMovieId({"id":movieDetails.id}))
    dispatch(toggleShow());
  };
  
  return (
  
      <div className="min-w-40 hover:scale-90" onClick={onClickHandler}>
        <img
          alt="movie-poster"
          src={tmdbDBUrl + movieDetails.poster_path}
        ></img>
      </div>
   
  );
};

export default MovieCard;
