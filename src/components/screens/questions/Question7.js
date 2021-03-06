import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question7Image1, question7Image2 } from '../../../constants/images';
import styled from "styled-components";

export const Question7 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 6.721vw;
      top: 0;
      height: 40.3703vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 0;
             height: 22.4609vh;
          } 
      @media screen and (max-width: 640px) and (orientation: portrait){ 
             height: 24.0625vh;
             top: -1.25vh;
             width: 69.1666vw;
      }    
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 27.2401vw;
      top: 86.574vh;
      background: #C3C47E;
      width: 15.625vw;
      height: 5.8333vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 35.4492vh;
             left: 49.1228%;
             height: 3.22vh;
             width: 20.7031vw;
          }
          
      @media screen and (max-width: 640px) and (orientation: portrait){ 
             display: none;
      }      
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 4.794vw;
      top: 59.1666vh;
      height: 36.7592vh;
      @media screen and (max-width: 1100px)
          { 
             top: 23.6328vh;
             left: 0;
             height: 20.4101vh;
          }
          
      @media screen and (max-width: 640px) and (orientation: portrait){ 
             height: 21.875vh;
             top: 15.15625vh;
             z-index: 3;
             left: -3.0555vw;
             width: 68.6111vw;
      }      
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 2.501vw;
      top: 26.1111vh;
      background: #00569D;
      width: 34.1666vw;
      height: 10.3703vh;
      mix-blend-mode: lighten;
      z-index: 2;
       @media screen and (max-width: 1100px)
          { 
             top: 10.8398vh;
             left: 11.0526%;
             height: 5.664vh;
             width: 44.6614vw;
          } 
       @media screen and (max-width: 640px) and (orientation: portrait){ 
             top: 9.0625vh;
             height: 18.59375vh;
             left: 10.9333vw;
             width: 66.38888vw;
      }   
    `
    const GrayRectangle = styled.div`
      position: absolute;
      left: 27.761vw;
      top: 48.8888vh;
      background: #3B3B3B;
      width: 15.625vw;
      height: 5.8333vh;
      mix-blend-mode: lighten;
      z-index: 2;
       @media screen and (max-width: 1100px)
          { 
             top: 30.664vh;
             left: 55.2631%;
             height: 3.22vh;
             width: 20.7031vw;
          } 
       @media screen and (max-width: 640px) and (orientation: portrait){ 
            display: none;
       }   
                    
   
    `
    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question7Image1}/>
                <YellowRectangle/>
                <SecondImg src={question7Image2}/>
                <BlueRectangle />
                <GrayRectangle />
            </ImageWrapper>
        );
    }
    return (
        <QuestionWrapper
            question={getQuestionById('7')}
            image={createImage()}
            {...props}
        />
    );
};