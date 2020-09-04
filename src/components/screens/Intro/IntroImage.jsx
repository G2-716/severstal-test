import styled from "styled-components";
import React from "react";
import { elonMuskIntro, introGif, gagarinIntro } from "../../../constants/images";

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom:0;
  right: 0;
  left: 0;
  @media screen and (max-width: 1100px)
  {
      bottom: auto;
      height: 59.8632vh;
  }
   @media screen and (max-width: 640px)
  {
      bottom: auto;
      height: 50vh;
  }
 
`
const Blackout = styled.div`
  position: absolute;
  top: 0;
  bottom:0;
  right: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1025) 6.46%, rgba(0, 0, 0, 0.3403) 99.37%);
  z-index: 3;
`
const GagarinImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 49.7222vh;
  z-index: 2;
  @media screen and (max-width: 1100px)
  {
     height: 36.4257vh;
  }
  @media screen and (max-width: 640px)
  { 
     height: 29.064vh;
  }   
      
`
const Gif = styled.img`
  position: absolute;
  top: 10.5555vh;
  left: 35.8854vw;
  height: 85vh;
  z-index: 1;
  @media screen and (max-width: 1100px)
      { 
         top: 9.5703vh;
         left: 13.5416vw;
         height: 46.4843vh;
      }  
     
  @media screen and (max-width: 640px)
      { 
         top: 8.7438vh;
         height: 31.6502vh;
      }   
      
`
const ElonImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 52.1296vh;
  z-index: 2;
  @media screen and (max-width: 1100px)
      { 
         height: 34.9609vh;
      }  
  @media screen and (max-width: 1199px)
      { 
         height: 27.9556vh;
      }     
`
export const IntroImage = () => {
    return (
            <ImageWrapper>
                <ElonImg src={elonMuskIntro} />
                <Gif src={introGif} />
                <GagarinImg src={gagarinIntro} />
                <Blackout />
            </ImageWrapper>
    );
}