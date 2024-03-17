import React from "react";
import MainVideoBackground from "./MainVideoBackground";
import useMovieVideos from "../hooks/useMovieVideos";
import { useSelector } from "react-redux";

const MainVideo = () => {

  
  const movies = useSelector((store) => store.moviesSlice);

  useMovieVideos(movies.nowPlayingMovies[0].id)

  return (

    movies?.movieVideos &&
    <div className="w-full absolute z-0 overflow-hidden min-h-28">
      <MainVideoBackground />
    </div>
  );
};

export default MainVideo;
