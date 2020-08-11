import React, { useContext } from 'react';
import styled from 'styled-components';
import { resolve } from 'url';
import { ProgressContext } from '../../contexts/ProgressContext';
import { AnswerType, answerTypes } from '../../answerTypes.config';
import { getAnswerById } from '../../utils/getAnswerById';
import { fade, slideDown } from '../../utils/keyframes';
import { logoImage, shareArrow } from '../../constants/images';

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
  
  @media screen and (min-width: 500px) and (max-height: 700px){
    margin-top: -2%;
    margin-bottom: 2.4971%;
  }
  
`
const Text = styled.p`
  font-size: 1.6666vw;
  line-height: 113%;
  @media screen and (min-width: 640px) and (max-width: 1100px)
      {
        font-size: 2.6vw;
      }
  @media screen and (max-width: 640px)
      {
        font-size: 2.7341vh;
      }
`
const LogoWrapper = styled.div`
  width: 13.6111%;
  height: 6.7777%;
  position: absolute;
  top: 6.6666%;
  right: 3.125%;
  animation: ${slideDown} 0.4s ease-out 0.1s both;
  
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

const ResultText = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.1s both;
`

const InvitingText = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.4s both;
`

const LogoStyled = styled.img`
    max-width: 100%;
`

const ImgWrapper = styled.div`
  animation: ${fade} 0.4s ease-out 0.1s both;
  
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

const ShareLink = styled.a`
    position: absolute;
    bottom: 3.2912%;
    border: none;
    background: none;
    color: white;
    font-size: 5vw;
    font-weight: 800;
    outline: none;
    text-decoration: none;
    
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

    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareTitle = 'Лидер перемен - Северсталь';
    const shareDescription = '#северсталь #лидерперемен';
    const shareImage = resolve(url, result.image);

    const queryParams = new URLSearchParams();

    queryParams.append('url', url);
    queryParams.append('title', shareTitle);
    queryParams.append('description', shareDescription);
    queryParams.append('image', shareImage);

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
                <ResultText>{result.description}</ResultText>
                <br />
                <InvitingText>
                    Хочешь, чтобы было так? Проходи отбор на
                    лидерскую программу компании “Северсталь”

                </InvitingText>
                <ShareLink href={`http://vk.com/share.php?${queryParams.toString()}`}>
                    Поделиться
                    <ShareImg src={shareArrow} alt={''}/>
                </ShareLink>
            </InfoWrapper>
        </FinalWrapper>
    );
};