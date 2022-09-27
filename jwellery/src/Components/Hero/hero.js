import React from 'react';
import './hero.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Hero = () => {
  return (
    <Carousel autoPlay='true' infiniteLoop='true' stopOnHover='false' >
                <div style={{height:'100vh'}}>
                    <img  src='https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='one'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div style={{height:'100vh'}}>
                    <img src="https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='one'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div style={{height:'100vh'}}>
                    <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='one'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
  )
}



export default Hero;
