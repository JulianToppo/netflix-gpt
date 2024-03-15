import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { addMovieReviews } from "../utils/movieDetailsSlice";

const useMovieReviews = (movie_id) => {
  console.log("movie reviews")
  const dispatch = useDispatch();
  console.log(movie_id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+movie_id+'/reviews',
          API_OPTIONS
        );
        
        const result = await data.json();
        console.log("movie result",result.results);
        dispatch(addMovieReviews(result.results));
      } catch (error) {
        console.error("Error fetching movies reviews:", error);
      }
    };

    fetchData();
  }, [dispatch,movie_id]);
};

export default useMovieReviews;
