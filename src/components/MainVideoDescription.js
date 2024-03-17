import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
const MainVideoDescription = () => {
  const movies = useSelector((store) => store.moviesSlice);
  useMovieDetails(movies.nowPlayingMovies[0].id);

  return (
    movies?.movieDetails && (
      <div className="w-full sm:w-1/2 relative z-40 py-60 px-16 text-white bg-gradient-to-r from-black">
        <div className="w-full ">
          <p className="text-2xl sm:text-xl font-extrabold">{movies.movieDetails.title}</p>
          <p>{movies.movieDetails.tagline}</p>
          <br></br>
          <p className="sm:xl">{movies.movieDetails.overview}</p>
          <p></p>
        </div>
        <div className="flex  sm:space-x-0 md:space-x-4 w-full flex-wrap">
          
            <button className="text-black sm:w-1/2 flex items-center font-medium bg-white px-16 sm:px-[20%] py-2 mt-2 shadow-sm rounded-sm hover:bg-slate-200 ">
              <img
                alt="play-button"
                src="./icons/play.png"
                className="w-5 h-5 mr-2"
              ></img>
              Play
            </button>
          

           
            <button className="text-black flex items-center   font-medium bg-white px-16 sm:px-0 py-2 mt-2 shadow-sm rounded-sm hover:bg-slate-200">
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
