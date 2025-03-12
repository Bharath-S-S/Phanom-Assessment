import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../About/About'
import Carousel from '../../components/carousel/MyCarousel'
import MyCarousel from '../../components/carousel/MyCarousel'
import ExplorePage from '../explore/ExplorePage'
import Plan from '../plan/Plan'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <About/>
     {/* <MyCarousel/> */}
     <ExplorePage/>
     <Plan/>
    </div>
  )
}

export default Home
