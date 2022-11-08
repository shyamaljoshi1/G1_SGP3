import React from 'react'
import styled from "styled-components";
import Catagory from '../../Components/New_arrival/catagory';
// import imaggg from "../images/Image-5.jpg";
// import ProjectApp from "./Project_Menu/Project_app";

const HeroImage = styled.img`
  position: relative;
  
  width: 99.4vw;
  height: 80vh;
  object-fit: cover;
  
  /* margin-bottom: 10rem; */
  @media screen and (max-width: 768px){
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    }
  @media screen and (max-width: 460px){
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    }
`;

const HeroProject = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 160rem;
  width: calc(100%-10rem);
  padding: 2rem;
  overflow: hidden;
  right:1rem;
  bottom: 8rem;
  h1{
    font-size: 3rem;
    letter-spacing: 1rem;
    text-shadow: 0px 0px 30px #fff;
    color: #eee;
  }
  @media screen and (max-width: 76.8rem){
    bottom:10rem;
    right: 2rem;
    }
  
`;


const Project = () => {
  return (
    <>
      <HeroImage src="https://images.unsplash.com/photo-1601121141499-17ae80afc03a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80" />
      <HeroProject>
        <h1>Gallery</h1>
      </HeroProject>
      <Catagory/>
    </>

  )
}

export default Project;

