import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question5Image1, question5Image2 } from '../../../constants/images';
import styled from "styled-components";

export const Question5 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 0;
      top: 2.5vh;
      height: 35vh;
       @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: 0;
             height: 22.8515vh;
          }  
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 14.8614%;
      top: 85.3703vh;
      background: #C3C47E;
      width: 16.0416vw;
      height: 9.9074vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 6.1523vh;
             left: auto;
             right: 4.9122%;
             height: 7.4218vh;
             width: 8.0729vw;
          } 
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 0;
      top: 63.1481vh;
      height: 35vh;
      @media screen and (max-width: 1100px)
          { 
             top: 23.6328vh;
             left: auto;
             right: 0;
             height: 22.8515vh;
          } 
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question5Image1}/>
                <YellowRectangle/>
                <SecondImg src={question5Image2}/>
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