import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {
    question6gif,
    question6Image1,
    question6Image2
} from '../../../constants/images';
import styled from "styled-components";

export const Question6 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 18.803vw;
      top: 1.4814vh;
      height: 66.9444vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 0;
             height: 32.3242vh;
          }
      @media screen and (max-width: 640px) { 
             height: 26.6009vh;
      }     
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 35.8613%;
      top: 23.7037vh;
      background: #C3C47E;
      width: 2.0833vw;
      height: 18.5185vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 6.8359vh;
             left: 27.5438%;
             height: 5.4687vh;
             width: 33.7239vw;
          }
      @media screen and (max-width: 640px) { 
             top: 7.758621vh;
             height: 4.4334vh;
             left: 27.4666vw;
             width: 45.0666vw;
      }     
    `
    const SecondImg = styled.img`
      position: absolute;
      left: -3.749vw;
      top: 50vh;
      height: 62.2222vh;
      @media screen and (max-width: 1100px)
          { 
             top: 17.2851vh;
             left: -7.6822vw;
             height: 30.0781vh;
          } 
      @media screen and (max-width: 640px) { 
             left: -10.9333vw;
             top: 16.37931vh;
             height: 24.6305vh;
      }     
    `
    const Gif = styled.img`
      position: absolute;
      top: 47.3714vh;
      left: 8.7899vw;
      height: 25.1851vh;
      z-index: 3;
      @media screen and (max-width: 1100px)
          { 
             top: 23.7304vh;
             left: 19.7917vw;
             height: 17.0898vh;
          }
      @media screen and (max-width: 640px) { 
             top: 21.6748vh;
             height: 14.0394vh;
             left: 27.4666vw;
      }     
    `
    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question6Image1}/>
                <YellowRectangle/>
                <SecondImg src={question6Image2}/>
                <Gif src={question6gif}/>
            </ImageWrapper>
        );
    }
    return (
        <QuestionWrapper
            question={getQuestionById('6')}
            image={createImage()}
            {...props}
        />
    );
};