import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
          API_OPTIONS
        );
        const result = await data.json();
        console.log(result.results);
        dispatch(addTopRatedMovies(result.results));
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useTopRatedMovies;
