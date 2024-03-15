import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieVideos } from "../utils/movieSlice";

const useMovieVideos = (movie_id) => {
  const dispatch = useDispatch();
  console.log("add movie videos")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movie_id+
          "/videos",
          API_OPTIONS
        );
        const result = await data.json();
        console.log(result.results);
        dispatch(addMovieVideos(result.results));
      } catch (error) {
        console.error("Error fetching movies videos:", error);
      }
    };

    fetchData();
  }, [dispatch,movie_id]);
};

export default useMovieVideos;
