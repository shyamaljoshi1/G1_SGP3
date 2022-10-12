import React from 'react';
import './Home.css';
import Hero from '../../Components/Hero/hero';
import GoldRate from '../../Components/Gold_rate/gold_rate';
import Catagories from '../../Components/Catagories/catagories';


const Home = () => {
  return (
    <>
      <Hero/>
      <Catagories/>
      <GoldRate/>
    </>
   
  )
}



export default Home;