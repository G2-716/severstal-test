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
      left: 5.2638vw;
      top: 1.6666vh;
      height: 33.5185vh;
      @media screen and (max-width: 1100px)
          { 
             z-index: 1;
             top: 4.8828vh;
             left: 0;
             height: 20.6054vh;
          } 
          
      @media screen and (max-width: 640px) { 
             top: 5.91133vh;
             left: -1.6vw;
             height: 17.3645vh;
      }        
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 14.2723vw;
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
      @media screen and (max-width: 640px) { 
             top: 30.4187vh;
             left: 11.7333vw;
             height: 6.6502vh;
             width: 63.4666vw;
      }      
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 20.3119vw;
      top: 41.1111vh;
      height: 57.6851vh;
      @media screen and (max-width: 1100px)
          { 
             top: 0;
             left: auto;
             right: 0;
             height: 45.6954vh;
          } 
      @media screen and (max-width: 640px) { 
             height: 38.3004vh;
             right: -1.6vw;
      }    
    `
    const BlueCircle = styled.div`
      position: absolute;
      border-radius: 50%;
      background-color: #00569D;
      top: 84.2592vh;
      left: 2.1366vw;
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
      @media screen and (max-width: 640px) { 
             height: 5.7881vh;
             width: 5.7881vh;
             top: 20.3201vh;
             left: 11.7333vw;
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