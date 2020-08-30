import React from 'react';
import styled from 'styled-components';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question1Image1, question1Image2 } from '../../../constants/images';

export const Question1 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 12.95%;
      top: 1.574vh;
      height: 51.3889vh;
      @media screen and (max-width: 1100px)
        { 
          left: auto;
          right:0;
          top: 0;
          height: 35.8398vh;
        }
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 22.8603%;
      top: 21.4814vh; 
      background: #C3C47E;
      width: 68.1306%;
      height: 15.3703vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
        { //fixed-width: 570px;
          left: 36.6666%;
          top: 38.9648vh;
          height: 4.0003vh;
          width: 55.0877%;
        }
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 22.8603%;
      top: 61.6666vh;
      height: 37.2222vh;
       @media screen and (max-width: 1100px)
        { 
          left: 0;
          top: 22.4609vh;
          height: 23.8281vh;
        }
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question1Image1} />
                <YellowRectangle />
                <SecondImg src={question1Image2} />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('1')}
            image={createImage()}
            {...props}
        />
    );
};