import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question10Image1, question10Image2,question10gif} from '../../../constants/images';
import styled from "styled-components";

export const Question10 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
      height: 100%;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 5.8819vw;
      top: 1.9444vh;
      height: 35.3703vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: 0;
             height: 23.7304vh;
          } 
      @media screen and (max-width: 640px) { 
            display: none;
      }     
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 13.439vw;
      top: 41.6666vh;
      background: #C3C47E;
      width: 14.2187vw;
      height: 7.8703vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 11.914vh;
             left: 52.4561%;
             height: 4.4921vh;
             width: 19.6614vw;
          }
      @media screen and (max-width: 640px) {
             height: 5.15625vh;
             top: 5.625vh;
             left: 0;
             width: auto;
             right: 19.7222vw;
      }       
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 15.11vw;
      top: 31.7592vh;
      height: 45.4629vh;
      @media screen and (max-width: 1100px)
          { 
             top: 8.6914vh;
             left: 55.614%;
             height: 26.6601vh;
          } 
      @media screen and (max-width: 640px) {
             left: auto; 
             top: -4.6875vh;
             height: 31.09375vh;
             width: 62.5vw;
             right: -10vw;
      } 
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 56.7222%;
      background-color: #00569D;
      top: 63.5185vh;
      height: 20.7407vh;
      mix-blend-mode: lighten;
      width: 9.1145vw;
      @media screen and (max-width: 1100px)
          { 
             top: 28.6132vh;
             left: 76.8421%;
             height: 12.1093vh;
             width: 12.7604vw;
          } 
      @media screen and (max-width: 640px) {
             height: 14.21875vh;
             width: 19.7222vw;
             top: 19.375vh;
             left: auto;
             right: 11.6666vw;
      }     
    `
    const Gif = styled.img`
      position: absolute;
      top: 70.6054vh;
      left: 4.0711vw;
      height: 30.7617vh;
      @media screen and (max-width: 1100px)
          { 
             top: 25.9765vh;
             left: 10.5263%;
             height: 19.6289vh;
          }
          
      @media screen and (max-width: 640px) {
             height: auto;
             top: 16.09375vh;
             bottom: 0;
             left: 0;
             width: 49.4444vw;
      }    
    `
    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question10Image1}/>
                <YellowRectangle/>
                <SecondImg src={question10Image2}/>
                <BlueRectangle />
                <Gif src={question10gif} />
            </ImageWrapper>
        );
    }
    return (
        <QuestionWrapper
            question={getQuestionById('10')}
            image={createImage()}
            {...props}
        />
    );
};