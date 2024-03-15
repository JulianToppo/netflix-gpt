import  { useEffect } from 'react'
import { addMovieCredits } from '../utils/movieDetailsSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';


const useMovieCredits = (movie_id) => {
    console.log("movie credits")
    
    const dispatch = useDispatch();
 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetch(
              'https://api.themoviedb.org/3/movie/'+movie_id+'/credits?language=en-US',
            API_OPTIONS
          );
          
          const result = await data.json();
          console.log("movie credits",result);
          dispatch(addMovieCredits(result));
        } catch (error) {
          console.error("Error fetching movies credits:", error);
        }
      };
  
      fetchData();
    }, [dispatch,movie_id]);
}

export default useMovieCredits