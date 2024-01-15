import React from 'react'
import { tmdbDBUrl } from '../../utils/constants'

const MovieCard = ({movieDetails}) => {
  console.log(movieDetails.title)
  if(!movieDetails.poster_path){
    return 
  }
  return (
    <div className='min-w-40'>
      <img alt="movie-poster" src={tmdbDBUrl+movieDetails.poster_path} ></img>
    </div>
  )
}

export default MovieCard
