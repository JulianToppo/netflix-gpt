import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US",
          API_OPTIONS
        );
        const result = await data.json();
        console.log(result.results);
        dispatch(addPopularMovies(result.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchData();
  }, [dispatch]);
};

export default usePopularMovies;
