import React from "react";
import ShowMovieSet from "./ShowMovieSet";
import { useSelector } from "react-redux";

const SecondaryController = () => {
  const movies = useSelector((store) => store.moviesSlice);

  return (
    <div className="flex flex-col p-6 md:-mt-24 text-white font-semibold z-40 bg-black">
      <div className="md:-mt-[120px]">
      {movies?.nowPlayingMovies && (
        <ShowMovieSet 
          title={"Now Playing"}
          movieSet={movies.nowPlayingMovies}
        />
      )}
     
       {movies?.topRatedMovies && (
        <ShowMovieSet
          title={"Top Rated Movies"}
          movieSet={movies.topRatedMovies}
        />
      )}
       {movies?.upcomingMovies && (
        <ShowMovieSet
          title={"Upcoming Movies"}
          movieSet={movies.upcomingMovies}
        />
      )}
       {movies?.popularMovies && (
        <ShowMovieSet
          title={"Popular Movies"}
          movieSet={movies.popularMovies}
        />
      )}

      
      </div>
    </div>
  );
};

export default SecondaryController;
