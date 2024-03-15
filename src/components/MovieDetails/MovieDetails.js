import useMovieDetails from "../../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import useMovieVideos from "../../hooks/useMovieVideos";
import useMovieCredits from "../../hooks/useMovieCredits";
import useMovieReviews from "../../hooks/useMovieReviews";
import useMovieRecommendation from "../../hooks/useMovieRecommendation";

import MovieRecommendation from "./MovieRecommendation";
import { useEffect, useState } from "react";
import { DBURLOriginal } from "../../utils/constants";
import MovieDescription from "./MovieDescription";
import MovieCastAndCrew from "./MovieCastAndCrew";

const MovieDetails = () => {
  //moviecredits ,details, recommdations, images
  const movieDetailsSlice = useSelector((store) => store.movieDetailsSlice);

  const [movieid, setmovieid] = useState(null);

  useMovieVideos(movieid);
  useMovieReviews(movieid);

  useEffect(() => {
    setmovieid(movieDetailsSlice.id);
  }, [movieDetailsSlice.id]);

  return (
    movieid && (
      <div className="mt-28 w-full">
        <MovieDescription movieid={movieid} />
        <MovieCastAndCrew movieid={movieid}/>
        <MovieRecommendation movieid={movieid} />
      </div>
    )
  );
};

export default MovieDetails;
