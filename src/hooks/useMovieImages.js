import React from 'react'
import { addMovieImages } from '../utils/movieDetailsSlice';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieImages = (movie_id) => {
    console.log("movie recommendations")
    const dispatch = useDispatch();
    console.log(movie_id)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetch(
              'https://api.themoviedb.org/3/movie/'+movie_id+'/images?language=en-US',
            API_OPTIONS
          );
          
          const result = await data.json();
          console.log("movie credits",result);
          dispatch(addMovieImages(result));
        } catch (error) {
          console.error("Error fetching movies images:", error);
        }
      };
  
      fetchData();
    }, [dispatch,movie_id]);
}

export default useMovieImages