import React from 'react'
import { DBURLOriginal } from '../../utils/constants'

const CastCard = ({crewcard}) => {
  return (
    <div className='m-2 rounded-xl bg-slate-200 p-3'>
        <div className='rounded-lg w-32'>
            <img className='rounded-sm' src={DBURLOriginal+crewcard.profile_path}></img>
            <p className='font-semibold'>{crewcard.original_name}</p>
            <p className='text-xs'>{crewcard.character}</p>
        </div>
    </div>
  )
}

export default CastCard