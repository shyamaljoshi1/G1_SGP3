import React from 'react'
import styled from "styled-components";
import { FcSurvey } from 'react-icons/fc';

// import imaggg from "../images/Image-7.jpg";

const HeroImage = styled.img`
  position: relative;
  width: 99.4vw;
  height: 80vh;
  object-fit: cover;
  @media screen and (max-width: 768px){
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    }
  @media screen and (max-width: 460px){
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    }
`;

const HeroAbout = styled.div`
  position: absolute;
  right:1rem;
  bottom: 8rem;
  z-index: 10;
  max-width: 1600px;
  width: calc(100%-100px);
  
  padding: 20px;
  overflow: hidden;
  h1{
    font-size: 3rem;
    letter-spacing: 1rem;
    text-shadow: 0px 0px 30px #fff;
    color: #eee;
  }

`;

const HeroData = styled.div`

`;

const HeroContent = styled.div`
  
`;

const HeroHistory = styled.div`
  margin: 10rem 8rem 10rem 16rem;
  h1{
    font-size: 3rem;
  }
  p{
    font-size:1.7rem;
  }
`;

const AboutUs = () => {

  const data = 
    {
        his: "What we are",
        gen2: 'J Babubhai Jewellers is a well reputed jewellery house of Junagadh district where all kind of Gold, Platinum, Real Diamond and some well known award winning Branded jewellery available under a single roof. Reasonable rate, wide range of stock, trustworthiness from decades, assistance in selection, timely delivery of ordered, service after sales, buyback satisfaction are the reasons to make us your favorite jewellery shop..',
        icon1 : <FcSurvey size={50} />,
    };



  return (
    <>
      <HeroImage src='https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
      <HeroAbout>
        <h1>ABOUT SELLER</h1>
      </HeroAbout>
      <HeroData key="1">
        
            <HeroContent key="2">
              <HeroHistory key="3">
                <h3>{data.icon1}</h3>
                <h1>{data.his}</h1>
                <p>{data.gen2}</p>
              </HeroHistory>
            </HeroContent>
      </HeroData>

      
    </>
  )
}
  


export default AboutUs;

