import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import ShowMovieSet from "../SecondaryController/ShowMovieSet";
import { addMovieMatches } from "../../utils/gptSlice";

const MovieRecommendation = () => {
  const gpt = useSelector((store) => store.gptSlice);
  const dispatch= useDispatch();

  const fetchMovie = async (movieName) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );

      const result = await data.json();
      console.log("movie result", result);
      return result;
    } catch (error) {
      console.error("Error fetching movies videos:", error);
    }
  };

  const findMovieFromNames = async (movies) => {
    try {

      console.log("movie names called")
      let movieMatches =await Promise.all(movies.map((movieName) => {
          console.log(movieName)
          return fetchMovie(movieName);
        })
      )

      console.log("movie Matches",movieMatches);

      dispatch(addMovieMatches(movieMatches));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    gpt.movieRecommendation &&  findMovieFromNames(gpt.movieRecommendation);
  }, [gpt.movieRecommendation]);

  return (
    <div className="bg-black  mt-12  text-white p-3 mx-9 rounded-md relative z-40 h-max">
      <h1 className="text-center text-xl">
        Movie Recommendations for {gpt.gptQuery==null?"-":gpt.gptQuery}
      </h1>
      {gpt.movieRecommendation && gpt.movieMatchesFromTMBD && (
        <div>{
          gpt.movieRecommendation.map((movie,index)=>{
           return  <ShowMovieSet title={movie} movieSet={gpt.movieMatchesFromTMBD[index].results}/>
          })
          }</div>
      )}
    </div>
  );
};

export default MovieRecommendation;
