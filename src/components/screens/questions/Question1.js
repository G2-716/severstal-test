import React from 'react';
import styled from 'styled-components';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question1Image1, question1Image2, question1gif } from '../../../constants/images';

export const Question1 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImgWrapper = styled.div`

    `

    const FirstImg = styled.img`
      position: absolute;
      left: 12.95%;
      top: 1.574vh;
      height: 51.3889vh;
      @media screen and (max-width: 1100px){ 
          left: auto;
          right:0;
          top: 0;
          height: 35.8398vh;
        }
        
      @media screen and (max-width: 640px){ 
          height: 29.433498vh;
      }
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 22.8603%;
      top: 21.4814vh; 
      background: #C3C47E;
      width: 31.511vw;
      height: 15.3703vh;
      mix-blend-mode: lighten;
      z-index: 2;
      @media screen and (max-width: 1100px)
        { 
          left: 36.6666%;
          top: 38.9648vh;
          height: 4.0003vh;
          width: 55.0877%;
        }
        
        @media screen and (max-width: 640px) {
           display: none;
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
        @media screen and (max-width: 640px)
        { 
          top: 20.5665vh;
          height: 19.5812vh;
        }
    `
    const Gif = styled.img`
      position: absolute;
      top: 69.537vh;
      left: -0.019vw;
      height: 19.8148vh;
      @media screen and (max-width: 1100px)
          { 
             height: 14.746vh;
          }
      
      @media screen and (max-width: 1100px)
          { 
             top: 4.6875vh;
             left: 5.7894%;
             height: 12.192vh;
          }    
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question1Image1} />
                <YellowRectangle />
                <SecondImg src={question1Image2} />
                <Gif src={question1gif} />
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