import React, { useContext } from 'react';
import styled from 'styled-components';
import { resolve } from 'url';
import { ProgressContext } from '../../contexts/ProgressContext';
import { AnswerType, answerTypes } from '../../answerTypes.config';
import { getAnswerById } from '../../utils/getAnswerById';
import { fade, slideDown } from '../../utils/keyframes';
import {ShareArrow} from "../Button/ShareArrow";
import {Logo} from "../svg/Logo";

const FinalWrapper = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  padding: 8.3333%  0 0 6.9444% ;
  color: #FFFFFF;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr  8.25%;
  @media screen and (max-width: 1100px)
  { 
    padding:0;
    grid-template-rows: 2fr 3fr  10.25%;
    grid-template-columns: 100% ;

  }
`;

const ResultTitle = styled.h1`
  font-weight: 800;
  font-size: 2.5vw;
  line-height: 2.5vw;
  letter-spacing: 0.015em;
  margin-bottom: 4.4444%;
  
  @media screen and (max-width: 1100px)
  {
    padding: 0;
    font-size: 6.6666vw;
    margin-bottom: 6.4971%;
  }
  
  @media screen and (max-width: 1100px) and (orientation: landscape)
  {
    margin-top: -2%;
    margin-bottom: 2.4971%;
    font-size: 5.6666vw;
  }
   @media screen and (min-width: 640px) and (max-width: 1199px)
  {
    font-size: 3.809vh;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 3.6596vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 4.3472vw;
    @media screen and (min-height: 560px ) 
      {
        font-size: 4.0041vh;
      }
     
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 3.6564vw;
  }
  
`
const Text = styled.p`
  font-size: 1.6666vw;
  line-height: 113%;
  
  @media screen and (min-width: 640px) and (max-width: 1100px)
  {
    font-size: 2.5428vw;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 2.438vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 2.9064vw;
    @media screen and (min-height: 520px ) 
      {
        font-size: 2.6675vh;
      }
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 2.1341vw;
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
   @media screen and (orientation: landscape) and (max-height: 640px) {
       width: 15.3333%;
   }
   @media screen and (orientation: landscape) and (max-height: 180px) {
       width: 9.3333%;
       top: 1.9687%;
   }
`
const InfoWrapper = styled.div`
  padding: 20% 10.9234% 0 9.5798%;
  grid-area:1/2/2/2;
  @media screen and (max-width: 1100px)
  {
    grid-area: 2/1/3/1;
    padding: 5.6% 7.5%;
  }
  
`

const ResultText = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.1s both;
`

const InvitingText = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.4s both;
`

const LogoStyled = styled(Logo)`
    max-width: 100%;
`

const ImgWrapper = styled.div`
  animation: ${fade} 0.4s ease-out 0.1s both;
  grid-area:1/1/3/2;

 @media screen and (max-width: 1100px)
  { 
      grid-area:1/1/2/1;
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
    padding-left: 7.5%;
    border: none;
    background: none;
    color: white;
    font-size: 5vw;
    font-weight: 800;
    outline: none;
    text-decoration: none;
    grid-area:3/1/3/1;
    
    @media screen and (orientation: landscape) and (max-width: 1100px){
      font-size: 4.8vw;
      bottom: 2.5%;
    }
    
    @media screen and (min-width: 1100px){
         font-size: 2.5vw;
         grid-area:2/2/2/2;
         padding-left: 9.5798%;
    }
    @media screen and (max-width: 1100px)
    {
        font-size: 4.9999vw;
    }
  
    @media screen and (max-width: 1100px) and (orientation: landscape)
    {
      font-size: 4.2496vw;
    }
     @media screen and (min-width: 640px) and (max-width: 1199px)
    {
       font-size: 2.8568vh;
      @media screen and (orientation: landscape) and (max-height: 700px)
     {
       font-size: 2.7447vw;
     } 
    }
    
    @media screen and (max-width: 640px)
    {
       font-size: 3.2604vw;
       @media screen and (min-height: 560px ) 
       {
         font-size: 3.0003vh;
       }
    }
    @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 2.7423vw;
    }
    
`
const StyledLink = styled.a`
    color: white;
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
                    <LogoStyled />
                </LogoWrapper>
                <ResultTitle>Твой результат</ResultTitle>
                <ResultText>{result.description}</ResultText>
                <br />
                <InvitingText>
                    Хочешь, чтобы было так? Проходи отбор &nbsp;
                    <StyledLink href={'http://fut.ru/grp/severstal_grp'}>
                        на лидерскую программу компании “Северсталь”
                    </StyledLink>
                </InvitingText>
            </InfoWrapper>
            <ShareLink href={`http://vk.com/share.php?${queryParams.toString()}`}>
                Поделиться
                <ShareArrow />
            </ShareLink>
        </FinalWrapper>
    );
};