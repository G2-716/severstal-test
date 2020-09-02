import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question2Image1, question2Image2, question2gif} from '../../../constants/images';
import styled from "styled-components";

export const Question2 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 4.216vw;
      height: 71.2962vh;
      @media screen and (max-width: 1100px)
      { 
         left:0;
         top: -1.7592vh;
         height: 40.8203vh;
      }
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 11.355vw;
      top: 86.2962vh;
      background: #00569D;
      width: 26.8229vw;
      height: 10.3703vh;
      mix-blend-mode: lighten;
      z-index: 2;
       @media screen and (max-width: 1100px)
      { 
         top: 34.8632vh;
         left: 47.7192%;
         height: 7.03125vh;
         width: 41.7968vw;
      }
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 1.7652vw;
      top: 65.0925vh;
      height: 35.3703vh;
      @media screen and (max-width: 1100px)
      { 
         top: 22.7539vh;
         left: 30.1754%;
         height: 24.0234vh;
      }
    `
    const Gif = styled.img`
      position: absolute;
      top: 50.6481vh;
      left: 19.1652vw;
      height: 25.3703vh;
      @media screen and (max-width: 1100px)
          { 
             top: 4.2968vh;
             left: auto;
             right: 0;
             height: 17.0898vh;
          }
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question2Image1} />
                <BlueRectangle />
                <SecondImg src={question2Image2} />
                <Gif src={question2gif} />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('2')}
            image={createImage()}
            {...props}
        />
    );
};