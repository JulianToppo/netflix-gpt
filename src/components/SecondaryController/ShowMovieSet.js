import React from 'react'
import MovieCard from './MovieCard'

const ShowMovieSet = ({title,movieSet}) => {
  console.log(title)
  return (
    <div className='pb-14'> 
      <h1>{title}</h1>
      <div className='flex overflow-x-auto space-x-2 overflow-y-auto'>
        {movieSet.map((movie)=>{
          return  <MovieCard  movieDetails={movie}/>
        })}
      </div>
    </div>
  )
}

export default ShowMovieSet
