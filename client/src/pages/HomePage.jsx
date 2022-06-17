import React from 'react'
import MainSlider from '../components/Sliders/MainSlider';
import CommunityPost from '../components/Sliders/Community';
import Trending from '../components/Sliders/Trending'
import Bottom from '../components/Footer/Bottom';

const HomePage = () => {
  return (
    <div style={{textAlign:"center"}}>
      <MainSlider/>
      <Trending/>
      <CommunityPost/>
      <Bottom/>

    </div>
  )
}

export default HomePage
