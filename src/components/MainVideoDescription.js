import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
const MainVideoDescription = () => {
  const movies = useSelector((store) => store.moviesSlice);
  useMovieDetails(movies.nowPlayingMovies[0].id);

  return (
    movies?.movieDetails && (
      <div className="w-full relative z-40 py-60 px-16 text-white bg-gradient-to-r from-black">
        <div className="w-1/2">
          <p className="text-2xl font-extrabold">{movies.movieDetails.title}</p>
          <p>{movies.movieDetails.tagline}</p>
          <br></br>
          <p>{movies.movieDetails.overview}</p>
          <p></p>
        </div>
        <div className="flex space-x-4">
          
            <button className="text-black flex items-center font-medium bg-white px-16 py-2 mt-2 shadow-sm rounded-sm hover:bg-slate-200 ">
              <img
                alt="play-button"
                src="./icons/play.png"
                className="w-5 h-5 mr-2"
              ></img>
              Play
            </button>
          

           
            <button className="text-black flex items-center  font-medium bg-white px-16 py-2 mt-2 shadow-sm rounded-sm hover:bg-slate-200">
              <img
                alt="info-button"
                src="./icons/info.png"
                className="w-5 h-5 mr-2"
              ></img>
              More Info
            </button>
          
        </div>
      </div>
    )
  );
};

export default MainVideoDescription;
