import React, { useEffect, useState } from "react";
import useMovieDetails from "../../hooks/useMovieDetails";
import useMovieCredits from "../../hooks/useMovieCredits";
import useMovieImages from "../../hooks/useMovieImages";
import { useSelector } from "react-redux";
import { DBURLOriginal, tmdbDBPoster } from "../../utils/constants";

const MovieDescription = ({ movieid }) => {
  const movieSlice = useSelector((store) => store.moviesSlice);
  const [movieDetails, setmovieDetails] = useState(null);
  useMovieDetails(movieid);
  useMovieCredits(movieid);
  // useMovieImages(movieid)

  useEffect(() => {
    setmovieDetails(movieSlice.movieDetails);
  }, [movieSlice.movieDetails]);

  return (
    movieDetails && (
      <div className=" w-full h-screen ">
        <div className="h-screen w-screen absolute  z-10 bg-green-950 bg-opacity-80 bg-gradient-to-tl from-black to-gray-700"></div>
        <img
          src={DBURLOriginal + movieDetails.backdrop_path}
          className="h-dvh w-screen absolute  z-10 opacity-20"
        ></img>
        <div className="flex w-full  z-20 relative align-middle h-screen">
          <div className="w-5/12 flex items-center justify-center">
            <div className="flex flex-col">
              <img
                src={tmdbDBPoster + movieDetails.poster_path}
                className="rounded-lg"
              ></img>
              <p className="p-5 bg-blue-950 font-semibold text-red-50 self-center w-full">
                Watch it on Netflix
              </p>
            </div>
          </div>
          <div className="w-7/12 flex justify-center items-center space-y-7  h-full p-6">
            <div className="flex flex-col  text-neutral-50">
              <div>
                <h1 className="text-4xl font-bold text-white ">
                  {movieDetails.title}
                </h1>
                <div className="flex space-x-6 text-xs">
                  <p>{movieDetails.release_date}</p>
                  <p>{movieDetails?.spoken_languages[0]?.english_name}</p>
                  <p>
                    {movieDetails.genres.map((item) => item.name).join(",")}
                  </p>
                </div>
              </div>

              <div className="flex h-1/12 w-1/12 space-x-3.5 mt-12  ">
                <p className="font-extralight p-6 rounded-3xl bg-blue-950 border-solid border-red-700 border-2 ">
                  {(movieDetails.vote_average * 10).toFixed()}
                </p>
                <p className="self-center">User Score:</p>
                <img src="/icons/heart.svg"></img>
                <img src="/icons/bookmark.svg"></img>
                <img src="/icons/star.svg"></img>
              </div>

              <div>
                <p className="font-light  italic my-4">
                  {movieDetails.tagline}
                </p>

                <h1 className="text-xl my-2">Overview</h1>
                <p className="my-2">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDescription;
