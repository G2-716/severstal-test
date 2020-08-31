import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question4Image1, question4Image2} from '../../../constants/images';
import styled from "styled-components";

export const Question4 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 10.625vw;
      top: 2.5925vh;
      height: 45vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: 0;
             height: 33.0078vh;
          }      

    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 7.918vw;
      top: 17.6851vh;
      background: #C3C47E;
      width: 8.9583vw;
      height: 39.074vh;
      mix-blend-mode: lighten;
      z-index: 2;
       @media screen and (max-width: 1100px)
          { 
             top: 7.5195vh;
             left: auto;
             right: 6.1403%;
             height: 23.7304vh;
             width: 9.1145vw;
          }  
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 4.481vw;
      top: 62.2222vh;
      height: 35.6481vh;
      @media screen and (max-width: 1100px)
          { 
             top: 21.7773vh;
             left: auto;
             right: 0;
             height: 25.9765vh;
          }    
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 21.095vw;
      top: 82.3148vh;
      background: #00569D;
      width: 22.1354vw;
      height: 12.5vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 34.8632vh;
             left: 0;
             height: 8.8867vh;
             width: 35.4166vw;
          }    
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question4Image1}/>
                <YellowRectangle/>
                <SecondImg src={question4Image2}/>
                <BlueRectangle />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('4')}
            image={createImage()}
            {...props}
        />
    );
};