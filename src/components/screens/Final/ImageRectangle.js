import React from 'react';
import styled from 'styled-components';
import { AnswerType } from '../../../answerTypes.config';

const ImageRectangleStyled = styled.div`
  position: absolute;
  background-color: #00569D;
  z-index: -1;
  right: 1.875vw;
  ${({ styles }) => styles};
`;

const rectangleStyles = {
    [AnswerType.Engineering]: `
        top: 23.0555vh;
        width: 32.8333vw;
        height: 49.6296vh;
        
        @media screen and (max-width: 1100px){
            top: 8.8398vh;
            right: 12.5vw;
            width: 54.151vw;
            height: 34.0898vh;
        }
        
        @media screen and (max-width: 640px){
            right: 0;
            width: 75vw;
        }
    `,
    [AnswerType.ProjectOffice]: `
        top: 6.8703vh;
        width: 15.8333vw;
        height: 52.5vh;
        
        @media screen and (max-width: 1100px){
            right: auto;
            left: 12.1979vw;
            width: 23.3072vw;
            height: 39.0625vh;
        }
        
        @media screen and (max-width: 640px){
            left: 0;
            width: 30.9333vw;
            height: 31.8965vh;
        }
    `,
    [AnswerType.Finance]: `
        top: 16.9629vh;
        right: 12.3437vw;
        width: 32.9629vh;
        height: 32.9629vh;
        
        @media screen and (max-width: 1100px){
            top:  3.5324vh;
            right: 40.55572vw;
            width: 23.9629vh;
            height: 23.9629vh;
        }
        
        @media screen and (max-width: 640px){
            right: 32.55572vw;
        }
    `,
    [AnswerType.Sales]: `
        top: 18.6481vh;
        width: 36.0416vw;
        height: 34.9074vh;
        
        @media screen and (max-width: 1100px){
          top: 7.9609vh;
          right: 15.8958vw;
          width: 61.6145vw;
          height: 23.1665vh;
        }
        
        @media screen and (max-width: 640px){
            right: 0;
            width: 90.6145vw;
            height: 22.1665vh;
        }
    
    `,
    [AnswerType.Purchases]: `
        top: 23.2481vh;
        width: 35.1875vw;
        height: 43.0555vh;
        
        @media screen and (max-width: 1100px){
            top: 8.9609vh;
            right: 15.75vw;
            width: 52.8177vw;
            height: 32.7254vh;
        }
        
        @media screen and (max-width: 640px){
            right: 8.2666vw;
            width: 70.5333vw;
        }
    
    `,
};

export const ImageRectangle = ({ resultType, className }) => {
    return (
        <ImageRectangleStyled
            className={className}
            styles={rectangleStyles[resultType]}
        />
    );
};