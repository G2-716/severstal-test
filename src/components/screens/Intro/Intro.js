import React, { useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../../contexts/ProgressContext";
import {StartButton} from "../../Button/StartButton";
import {Text} from "../../../shared/Text";
import { fade, slideDown } from '../../../utils/keyframes';
import {Logo} from "../../svg/Logo";
import {IntroImage} from "./IntroImage";

const IntroWrapper = styled.div`
    overflow: auto;
    background-color: #000000;
    height: 100%;
`;

const FirstTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.1s both;
`

const SecondTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.4s both;
`

const IntroTitle = styled.h1`
  font-weight: 800;
  font-size: 6.7vw;
  line-height: 95%;
  margin: 7.8703vh 7.8738vw 6.0185vh 0;
  
   @media screen and (max-width: 1199px)
  {
    font-size: 11.71875vw;
    margin: 5.2734vh 40vw 2.3437vh 0;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 8.0512vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 10.664vw;
    margin: 4.803vh 40vw 3.3251vh 0;
  }

`;

const InfoWrapper = styled.div`
  //grid-area:1/1/1/1;
  position: relative;
  width: 100%;
  padding: 14.5vh 43.75vw 14.5vh 13.75vw;
  z-index: 4;
 
  @media screen and (max-width: 1199px) { 
    padding: 36.5234vh 6.5104vw 0;
    
    @media screen and (max-height: 640px) and (orientation: landscape) {
      padding-bottom: 0;
    }
  }
  
  @media screen and (max-width: 640px) {
    padding: 45.9359vh 9.6vw 0 6.1576vh;
  }
`

const LogoStyled = styled(Logo)`
    animation: ${slideDown} 0.4s ease-out 0.1s both; 
`

const LogoWrapper = styled.div`
  max-width: 24.23%;
  @media screen and (max-width: 1199px)
    {
      max-width: 23.698%;
    }
  @media screen and (min-width: 800px) and (max-width: 1199px) and (max-height: 950px )
    {
     width: 13%;
    }

  @media screen and (max-height: 700px) and (min-width: 640px) and (max-width: 800px) 
    {
      max-width: 20%;
    }
   @media screen and (max-width: 640px) and (orientation: landscape)
   {
      max-width: 25%
   }
`

export const Intro = props => {
    const { setNext } = useContext(ProgressContext);
    return (
        <IntroWrapper>
            <IntroImage />
            <InfoWrapper className={'InfoWrapper'}>
                <LogoWrapper >
                    <LogoStyled />
                </LogoWrapper>
                <IntroTitle>Лидер перемен</IntroTitle>
                <FirstTextParagraph>
                    Кого зовут лидерами перемен? Людей, оставляющих след во Вселенной.
                    Людей, разрушающих рамки привычного, раздвинающих границы возможного,
                    объединяющихся друг с другом и меняющих мир. Генри Форд, Мария Кюри,
                    Стив Джобс и принцесса Диана.
                </FirstTextParagraph>
                <br />
                <SecondTextParagraph>
                    Какой лидер перемен ты?
                    Пройди тест, чтобы узнать!
                </SecondTextParagraph>
                <br />
                <StartButton onClick={setNext} />
            </InfoWrapper>
        </IntroWrapper>
    );
};