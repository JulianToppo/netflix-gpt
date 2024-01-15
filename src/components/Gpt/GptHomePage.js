import React from 'react'
import Header from '../Session/Header'
import BackgroungGpt from './BackgroungGpt'
import SearchBar from './SearchBar'
import MovieRecommendation from './MovieRecommendation'
const GptHomePage = () => {
  return (
    <div>
      <Header />
      <BackgroungGpt />
      <SearchBar />
      <MovieRecommendation />
    </div>
  )
}

export default GptHomePage
