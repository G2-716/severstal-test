import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question9Image2, question9Image1, question9gif} from '../../../constants/images';
import styled from "styled-components";

export const Question9 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      top: 2.6851vh;
      left: 12.3461vw;
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
      left: 11.8299vw;
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
      top: 0;
      left: 18.339vw;
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
             width: 16.5364vw;
          } 
    `

    const Gif = styled.img`
      position: absolute;
      top: 48.0555vh;
      left: 16.5592vw;
      height: 20.4629vh;
      @media screen and (max-width: 1100px)
          { 
             top: 13.0859vh;
             left: 0;
             height: 13.7695vh;
          }
    `
    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question9Image1}/>
                <SecondImg src={question9Image2}/>
                <BlueRectangle />
                <Gif src={question9gif}/>
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