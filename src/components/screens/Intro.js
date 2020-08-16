import React, { useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";
import {DesktopButton} from "../Button/DesktopButton";
import {Text} from "../../shared/Text";
import {MobileButton} from "../Button/MobileButton";
import { introImage, introMobileImage, logoImage } from '../../constants/images';
import { fade, slideDown } from '../../utils/keyframes';
import {Logo} from "../svg/Logo";

const IntroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  color: #FFFFFF;
  background: #090908 url(${introMobileImage}) no-repeat center;
  background-position-y: 2.890%;
  background-size: contain;
  overflow: auto;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  @media screen and (min-width: 1201px) 
  {
    overflow: auto;
    background-color: #1E1D1C;
    display: grid;
    padding: 0.7% 7%;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 100%;
    background-image: none;
  }
  
`;



const FirstTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.1s both;
`

const SecondTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.4s both;
`

const IntroTitle = styled.h1`
  font-weight: 800;
  font-size: 5.5vw;
  line-height: 95%;
  margin: 13.8324% 0 7.8738%;
  
  @media screen and (max-height: 650px ) 
  {
    margin: 5.3324% 0 3.5738%;
  }
  
   @media screen and (min-width: 640px) and (max-width: 1199px)
  {
    padding-right: 12%;
    font-size: 8.3815vh;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 8.0512vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 9.5639vw;
    padding-right: 12%;
    @media screen and (min-height: 560px ) 
      {
        font-size: 8.8091vh;
      }
     
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 8.0441vw;
  }
`;

const InfoWrapper = styled.div`
 padding-top: 4.9273%;
 
 @media screen and (max-width: 1199px)
  {
    position: absolute;
    z-index: 2;
    padding: 2.890% 10.4109% 11.8497% 8.7671%;
  }
  
  @media screen and (max-height: 640px) and (orientation: landscape) 
  {
    position: absolute;
    z-index: 2;
    padding-bottom: 0;
  }

`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  padding-left: 8.75%;

  animation: ${fade} 0.4s ease-out 0.1s both;
  
  @media screen and (max-width: 1199px)

  {
    display: none;
  }
`

const ImageStyled = styled.img`
  height: 100%;
  max-width: 100%;
`

const LogoStyled = styled(Logo)`
    animation: ${slideDown} 0.4s ease-out 0.1s both; 
`

const DesktopButtonStyled = styled(DesktopButton)`
  margin-top: 14.2823%;
  
   @media screen and (max-width: 1199px)
   {
       display: none;
   }
`

const MobileButtonStyled = styled(MobileButton)`
  margin-top: 23.1213%;
  font-size: 2.8125vh;
  @media screen and (min-width: 1199px)
  {
    display: none;
  }
  
  @media screen and (max-height: 720px) and (orientation: landscape)
  {
    margin-top: 5%;
    font-size: 2.3125vw;
    padding: 2% 0; 
  }
   
  
    
`

const LogoWrapper = styled.div`
  max-width: 32.6666%;
  @media screen and (max-width: 1199px)
    {
       max-width: 32.8767%;
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
            <InfoWrapper className={'InfoWrapper'}>
                <LogoWrapper >
                    <LogoStyled />
                </LogoWrapper>
                <IntroTitle>Лидер перемен</IntroTitle>
                <FirstTextParagraph>
                    Кого зовут лидерами перемен? Людей, осставляющих вмятину во Вселенной.
                    Людей, разрушающих рамки привычного, раздвинающих границы возможного,
                    объединяющихся друг с другом и меняющих мир.
                </FirstTextParagraph>
                <br />
                <SecondTextParagraph>
                    Генри Форд, Мария Кюри,
                    Стив Джобс и принцесса Диана. Какой лидер перемен ты?
                    Пройди тест, чтобы узнать!
                </SecondTextParagraph>
                <DesktopButtonStyled onClick={setNext}>Пройти тест</DesktopButtonStyled>
                <MobileButtonStyled onClick={setNext}>Пройти тест</MobileButtonStyled>
            </InfoWrapper>
            <ImgWrapper>
                <ImageStyled src={introImage} alt={''}/>
            </ImgWrapper>
        </IntroWrapper>
    );
};