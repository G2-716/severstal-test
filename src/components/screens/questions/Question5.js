import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question5Image1, question5Image2, question5gif } from '../../../constants/images';
import styled from "styled-components";

export const Question5 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 3.9299vw;
      top: 2.5vh;
      height: 35vh;
       @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: 0;
             height: 22.8515vh;
          }  
          
       @media screen and (max-width: 640px) { 
             height: 18.7192vh;
       }    
    `
    const YellowRectangle = styled.div`
      position: absolute;
      top: 85.3703vh;
      background: #C3C47E;
      width: 16.0416vw;
      height: 9.9074vh;
      mix-blend-mode: lighten;
      z-index: 2;
      left: 11.0499vw;
      @media screen and (max-width: 1100px)
          { 
             top: 6.1523vh;
             left: auto;
             right: 4.9122%;
             height: 7.4218vh;
             width: 8.0729vw;
          } 
      @media screen and (max-width: 640px) { 
             top: 7.1428vh;
             height: 6.0344vh;
             width: 10.6666vw;
             left: 83.2vw;
      }     

    `
    const SecondImg = styled.img`
      position: absolute;
      left: 3.9299vw;
      top: 63.1481vh;
      height: 35vh;
      @media screen and (max-width: 1100px) { 
             top: 23.6328vh;
             left: auto;
             right: 0;
             height: 22.8515vh;
      }
       
      @media screen and (max-width: 640px) { 
             height: 18.7192vh;
      }     
    `
    const Gif = styled.img`
      position: absolute;
      top: 33.9814vh;
      left: 10.879vw;
      height: 33.3333vh;
      @media screen and (max-width: 1100px)
          { 
             top: 19.4335vh;
             left: 7.5438%;
             height: 22.3632vh;
          }
      @media screen and (max-width: 640px) { 
             top: 17.9802vh;
             left: 7.46666vw;
             height: 18.7192vh;
      }    
    `
    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question5Image1}/>
                <YellowRectangle/>
                <SecondImg src={question5Image2}/>
                <Gif src={question5gif} />
            </ImageWrapper>
        );
    }
    return (
        <QuestionWrapper
            question={getQuestionById('5')}
            image={createImage()}
            {...props}
        />
    );
};