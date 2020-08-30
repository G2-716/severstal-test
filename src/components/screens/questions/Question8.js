import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question8Image2, question8Image1 } from '../../../constants/images';
import styled from "styled-components";

export const Question8 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 7.0838%;
      top: 1.6666vh;
      height: 33.5185vh;
      @media screen and (max-width: 1100px)
          { 
             z-index: 1;
             top: 4.8828vh;
             left: 0;
             height: 20.6054vh;
          } 
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 27.5088%;
      top: 53.8888vh;
      background: #C3C47E;
      width: 10.8333vw;
      height: 23.4259vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
          { 
             top: 33.9843vh;
             left: 13.1578%;
             height: 7.9101vh;
             width: 46.4843vw;
          } 
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 41.2042%;
      top: 41.1111vh;
      height: 57.6851vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 0;
             height: 45.6954vh;
          } 
    `
    const BlueCircle = styled.div`
      position: absolute;
      border-radius: 50%;
      left: 0;
      background-color: #00569D;
      top: 84.2592vh;
      height: 11.2037vh;
      width: 11.2037vh;
      mix-blend-mode: lighten;
      @media screen and (max-width: 1100px)
          {   
             z-index: 2;
             top: 21.9726vh;
             left: 13.1578%;
             height: 6.9335vh;
             width: 6.9335vh;
          } 
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question8Image1}/>
                <YellowRectangle/>
                <SecondImg src={question8Image2}/>
                <BlueCircle />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('8')}
            image={createImage()}
            {...props}
        />
    );
};