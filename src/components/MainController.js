import React from "react";
import { useSelector } from "react-redux";
import MainVideo from "./MainVideo";
import MainVideoDescription from "./MainVideoDescription";

const MainController = () => {
  const movies = useSelector((store) => store.moviesSlice);

  return (
    movies?.nowPlayingMovies && (
      <div className="flex-col w-full"> 
        <MainVideo />
        <MainVideoDescription />
        {/* 
      Main Video
      Video Description
      */}
      </div>
    )
  );
};

export default MainController;
