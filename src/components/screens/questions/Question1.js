import React from 'react';
import styled from 'styled-components';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { question1Image1, question1Image2, question1gif } from '../../../constants/images';

export const Question1 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
      height: 100%;
    `
    const FirstImgWrapper = styled.div`
       position: absolute;
       overflow: hidden;
       right:0;
       top: 0;
       bottom:0;
       width: 42.7777vw;
    `

    const SecondImgWrapper = styled.div`
       position: absolute;
       overflow: hidden;
       left:0;
       top: 3.5375vh;
       bottom:0;
       width: 48.0555vw;
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
          position: static;
          height: 90vh;
          width: 135.2777vw;
          margin-left: -33.3333vw;
          margin-top: -7.1875vh;
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
          position: static;
          height: 33.59375vh;
          width: 66.3888vw;
          margin-left: -19.1666vw;
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
             top: 14.6875vh;
             left: auto;
             right: 9.1666vw;
             height: 16.875vh;
             width: 53.0555vw;
          }    
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImgWrapper>
                    <FirstImg src={question1Image1} />
                </FirstImgWrapper>
                <YellowRectangle />
                <SecondImgWrapper>
                    <SecondImg src={question1Image2} />
                </SecondImgWrapper>
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