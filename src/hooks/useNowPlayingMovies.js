import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_OPTIONS
        );
        const result = await data.json();
        console.log(result.results);
        dispatch(addNowPlayingMovies(result.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useNowPlayingMovies;
