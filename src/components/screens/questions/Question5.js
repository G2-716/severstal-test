import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question5Image1, question5Image2, question5gif } from '../../../constants/images';
import styled from "styled-components";

export const Question5 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
      height: 100%;
    `
    const SecondImgWrapper = styled.div`
       position: absolute;
       overflow: hidden;
       left: 0;
       top: 0;
       height: 31.09375vh;
       width: 45.8333vw;
       z-index: 2; 
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
           display: none;
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
             top: 5vh;
             height: 28.59375vh;
             width: 65vw;
             left: 17.5vw;
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
          position: static;
          height: 31.5625vh;
          width: 101.3888vw;
          margin-left: -6.6666vw;
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
             top: auto;
             bottom: 0;
             left: auto;
             right: 0;
             width: 60.2777vw;
             height: 25.625vh;
             z-index: 3; 
      }    
    `
    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question5Image1}/>
                <YellowRectangle/>
                <Gif src={question5gif} />
                <SecondImgWrapper>
                    <SecondImg src={question5Image2}/>
                </SecondImgWrapper>
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