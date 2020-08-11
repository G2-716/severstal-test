import React, { useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";
import { AnswerType, answerTypes } from '../../answerTypes.config';
import { getAnswerById } from '../../utils/getAnswerById';
import { logoImage, shareArrow } from '../../constants/images';
//import {Text} from "../shared/Text";

const FinalWrapper = styled.div`
  background-color: #1E1D1C;
  height: 100vh;
  width: 100%;
  padding: 8.3333%  3.9583% 0 6.9444% ;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 3fr 2fr ;
  grid-template-rows: 100%;
  @media screen and (max-width: 1100px)
  { 
    padding:0;
    grid-template-rows: 2fr 3fr;
    grid-template-columns: 100% ;

  }
`;
const ResultTitle = styled.h1`
  font-weight: 800;
  font-size: 2.5vw;
  line-height: 2.5vw;
  letter-spacing: 0.015em;
  margin-bottom: 4.4444%;
  @media screen and (max-width: 1100px){
    padding: 0;
    font-size: 6.6666vw;
    margin-bottom: 6.4971%;
  }
`
const LogoWrapper = styled.div`
  width: 13.6111%;
  height: 6.7777%;
  position: absolute;
  top: 6.6666%;
  right: 3.125%;
  @media screen and (max-width: 1100px){
      width: 33.3333%;
      height: 5.7812%;
      top: 2.9687%;
      left: 3.333%;
  }
  
`
const InfoWrapper = styled.div`
  padding: 180px 0 0 60px;
  @media screen and (max-width: 1100px){
    padding: 9.6% 7.5% 0;
  }
`
const Text = styled.p`
  font-size: 1.6666vw;
  line-height: 113%;
  letter-spacing: 0.01em;
  
  @media screen and (max-width: 1100px)
  {
    font-size: 2.2vw;

  }
`
const LogoStyled = styled.img`
    max-width: 100%;
`

const ImgWrapper = styled.div`
 @media screen and (max-width: 1100px)
  { 
  overflow: hidden;
  position: relative;
  height: 89.5%;
  }
`

const ImgStyled = styled.img`
  max-width: 100%;
  height: 100%;
    @media screen and (max-width: 1100px)
  { 
    height: auto;
    position:absolute;
    width:100%;
    overflow: hidden;
   }
`

const ShareButton = styled.button`
    position: absolute;
    bottom: 3.2912%;
    border: none;
    background: none;
    color: white;
    font-size: 5vw;
    font-weight: 800;
    @media screen and (min-width: 1100px){
    display: none;
    }
`

const ShareImg = styled.img`
    margin-left: 2vw;
    vertical-align: middle;
    height: 6vw;
`

const DEFAULT_RESULT = AnswerType.Sales;

export const Final = props => {
    const { answers } = useContext(ProgressContext);

    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId) return res;

        const answer = getAnswerById(questionId, answerId);
        const { type } = answer;
        return { ...res, [type]: (res[type] || 0) + 1 };
    }, {});

    const maxPoints = Math.max(...Object.keys(resultPoints).map(key => resultPoints[key]));
    const resultType = Object.keys(resultPoints).find(key => resultPoints[key] === maxPoints);
    const result = answerTypes[resultType || DEFAULT_RESULT];

    return (
        <FinalWrapper>
            <ImgWrapper>
                <ImgStyled src={result.image} alt={''}/>
            </ImgWrapper>
            <InfoWrapper>
                <LogoWrapper>
                    <LogoStyled src={logoImage} alt={''}/>
                </LogoWrapper>
                <ResultTitle>Твой результат</ResultTitle>
                <Text>{result.description}</Text>
                <br />
                <Text>
                    Хочешь, чтобы было так? Проходи отбор на
                    лидерскую программу компании “Северсталь”
                </Text>
                <ShareButton>
                    Поделиться 
                    <ShareImg src={shareArrow} alt={''}/>
                </ShareButton>
            </InfoWrapper>
        </FinalWrapper>
    );
};