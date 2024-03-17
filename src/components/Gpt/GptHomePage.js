import React from 'react'
import Header from '../Session/Header'
import BackgroungGpt from './BackgroungGpt'
import SearchBar from './SearchBar'
import MovieRecommendation from './MovieRecommendation'
const GptHomePage = () => {
  return (
    <div className='w-full absolute h-screen' style={{backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg')"}}>
   
      <SearchBar />
      <MovieRecommendation />
    </div>
  )
}

export default GptHomePage
