import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";

const useMovieDetails = (movie_id) => {
  console.log("movie details")
  const dispatch = useDispatch();
  console.log(movie_id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+movie_id+'?language=en-US',
          API_OPTIONS
        );
        
        const result = await data.json();
        console.log("movie result",result);
        dispatch(addMovieDetails(result));
      } catch (error) {
        console.error("Error fetching movies videos:", error);
      }
    };

    fetchData();
  }, [dispatch,movie_id]);
};

export default useMovieDetails;
