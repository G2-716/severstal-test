import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question3Image1, question3Image2, question3gif} from '../../../constants/images';
import styled from "styled-components";

export const Question3 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
      height: 100%;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 3.023vw;
      top: 1.4814vh;
      height: 28.4259vh;
       @media screen and (max-width: 1100px)
      { 
         top: 0;
         left: 0;
         height: 19.1406vh;
      }
       @media screen and (max-width: 640px) and (orientation: portrait){ 
         display: none;
      }
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 21.771vw;
      top: 6.6666vh;
      background: #C3C47E;
      width: 9.6875vw;
      height: 86.574vh;
      mix-blend-mode: lighten;
      z-index: 2;
       @media screen and (max-width: 1100px)
      { 
         top: 0;
         left: 68.7719%;
         height: 45.8984vh;
         width: 15.3645vw;
      }
      @media screen and (max-width: 640px) and (orientation: portrait){ 
         top: 0;
         bottom: 0;
         height: auto;
         left: auto;
         right: 0;
         width: 20.85vw;
      }
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 11.46vw;
      top: 33.1481vh;
      height: 34.9074vh;
      @media screen and (max-width: 1100px)
      { 
         top: 7.3242vh;
         left: 38.5964%;
         height: 23.4375vh;
      }
      
      @media screen and (max-width: 640px) and (orientation: portrait){ 
         top: -1.3543vh;
         left: 9.1666vw;
         height: 28.125vh;
         width: 90.8333vw;
      }
    `
    const Gif = styled.img`
      position: absolute;
      top: 72.5vh;
      left: 4.163vw;
      height: 24.537vh;
      z-index: 3;
      @media screen and (max-width: 1100px)
          { 
             top: 29.1992vh;
             left: 0;
             height: 16.6015vh;
          }
      @media screen and (max-width: 640px) and (orientation: portrait){ 
         top: auto;
         bottom: 0;
         height: 17.8125vh;
      }    
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question3Image1}/>
                <YellowRectangle/>
                <SecondImg src={question3Image2}/>
                <Gif src={question3gif} />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('3')}
            image={createImage()}
            {...props}
        />
    );
};