import React from 'react'
import MovieCard from './MovieCard'
import {useSelector} from "react-redux"; 

const ShowMovieSet = ({title,movieSet}) => {
  const gpt = useSelector((store)=>store.gptSlice)

  console.log(title)
  return (
    <div className='pb-14'> 
      <h1 className='text-lg'>{gpt.showGptPage==false?title:title.replaceAll(/'/g,'')}</h1>
      <div className='flex items-center space-x-4'>
          <p className='font-extrabold text-lg'>{'<'}</p>
      <div className='flex overflow-x-auto scroll-smooth space-x-2'>

        {movieSet.map((movie)=>{
          return  <MovieCard  movieDetails={movie}/>
        })}
  
      </div>
      <p className='font-extrabold text-lg'>{'>'}</p>
      </div>
    
    </div>
  )
}

export default ShowMovieSet
