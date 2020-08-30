import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question9Image2, question9Image1 } from '../../../constants/images';
import styled from "styled-components";

export const Question9 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      top: 2.6851vh;
      left: 10.2499vw;
      height: 38.8888vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 0;
             height: 26.0742vh;
          } 
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 9.849vw;
      top: 75vh;
      height: 20.4629vh;
      @media screen and (max-width: 1100px)
          { 
             top: 31.4453vh;
             left: 0;
             height: 13.6718vh;
          } 
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 16.7999vw;
      top: 0;
      background: #00569D;
      width: 10.46875vw;
      height: 89.8148vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 4.9122%;
             height: ;
             width: 16.5364vw;
          } 
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question9Image1}/>
                <SecondImg src={question9Image2}/>
                <BlueRectangle />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('9')}
            image={createImage()}
            {...props}
        />
    );
};