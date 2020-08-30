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
      left: 9.4047%;
      top: 0;
      height: 40.3703vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 0;
             height: 22.4609vh;
          } 
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 56.3095%;
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
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 5%;
      top: 59.1666vh;
      height: 36.7592vh;
      @media screen and (max-width: 1100px)
          { 
             top: 23.6328vh;
             left: 0;
             height: 20.4101vh;
          } 
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 0;
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
    `
    const GrayRectangle = styled.div`
      position: absolute;
      left: 57.5%;
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