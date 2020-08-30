import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProgressContext } from "../../contexts/ProgressContext";
import { DesktopButton } from "../Button/DesktopButton";
import { Text } from "../../shared/Text";
import { MobileButton } from "../Button/MobileButton";
import { introImage, introMobileImage, logoImage } from '../../constants/images';
import { fade, slideDown } from '../../utils/keyframes';
import { Logo } from "../svg/Logo";
import { Spacer } from '../Spacer';
import { respondTo } from '../../utils/respondTo';

const IntroWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #000000;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;

  ${respondTo.xmd`
    grid-template-columns: 2fr 3fr;
    max-width: 1200px;
    margin: 0 auto;
  `}
`

const InfoWrapper = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  z-index: 1;
  
  ${respondTo.xs`
    max-width: 620px;
    margin: 0 auto;
  `}
  
  ${respondTo.md`
    padding: 40px 30px;
  `}
  
  ${respondTo.xmd`
    max-width: 100%;
    margin: 0;
    padding: 70px 120px;
  `}
`

const LogoStyled = styled(Logo)`
  width: 120px;
  animation: ${slideDown} 0.4s ease-out 0.1s both;
  
  ${respondTo.xs`
    width: 180px;
  `}
  
  ${respondTo.md`
    width: 220px;
  `}
  
  ${respondTo.xmd`
    width: 160px;
  `}
`

const IntroTitle = styled.h1`
  font-weight: 800;
  font-size: 2.8rem;
  line-height: 95%;
  margin-top: 20px;
  
  ${respondTo.xs`
    font-size: 3.4rem;
  `}
  
  ${respondTo.md`
    font-size: 5.2rem;
    margin-top: 50px;
  `}
  
  ${respondTo.xmd`
    font-size: 4.8rem;
    margin-top: 50px;
  `}
`;

const ParagraphsWrapper = styled.div`
  margin-top: 8px;
  
  ${respondTo.xs`
    margin-top: 20px;
  `}
  
  ${respondTo.md`
    margin-top: 28px;
  `}
`;

const FirstTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.1s both;
`

const SecondTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.4s both;
`

const ThirdTextParagraph = styled(Text)`
  animation: ${slideDown} 0.4s ease-out 0.7s both;
`

const ButtonsWrapper = styled.div`
  margin-top: 20px;
  
  ${respondTo.md`
    margin-top: 60px;
  `}
`;

const MobileButtonStyled = styled(MobileButton)`
  ${respondTo.xmd`
    display: none;
  `}
`

const DesktopButtonStyled = styled(DesktopButton)`
  display: none;
  
  ${respondTo.xmd`
    display: flex;
  `}
`

const ImageWrapper = styled.div`
  position: relative;
  grid-area: 1/1/2/2;
  width: 100%;
  height: 100%;
  animation: ${fade} 0.4s ease-out 0.1s both;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  
  ${respondTo.xmd`
    grid-area: 1/2/2/3;
    
    &:after {
      content: none;
    }
  `}
`

const ImageStyled = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 100%;
  
  ${respondTo.xs`
    object-fit: contain;
  `}
  
  ${respondTo.xmd`
    width: auto;
  `}
`

const SpacerStyled = styled(Spacer)`
  ${respondTo.xmd`
    display: none;
  `}
`

export const Intro = props => {
    const { setNext } = useContext(ProgressContext);
    return (
        <IntroWrapper>
            <Container>
                <InfoWrapper>
                    <LogoStyled />
                    <SpacerStyled />
                    <IntroTitle>
                        Лидер
                        <br/>
                        перемен
                    </IntroTitle>
                    <ParagraphsWrapper>
                        <FirstTextParagraph>
                            Кого зовут лидерами перемен? Людей, оставляющих вмятину во Вселенной.
                            Людей, разрушающих рамки привычного, раздвинающих границы возможного,
                            объединяющихся друг с другом и меняющих мир.
                        </FirstTextParagraph>
                        <SecondTextParagraph>
                            Генри Форд, Мария Кюри,
                            Стив Джобс и принцесса Диана.
                        </SecondTextParagraph>
                        <ThirdTextParagraph>
                            Какой лидер перемен ты?
                            Пройди тест, чтобы узнать!
                        </ThirdTextParagraph>
                    </ParagraphsWrapper>
                    <SpacerStyled value={2} />
                    <ButtonsWrapper>
                        <DesktopButtonStyled onClick={setNext}>Пройти тест</DesktopButtonStyled>
                        <MobileButtonStyled onClick={setNext}>Пройти тест</MobileButtonStyled>
                    </ButtonsWrapper>
                    <SpacerStyled />
                </InfoWrapper>
                <ImageWrapper>
                    <ImageStyled src={introMobileImage} alt={''}/>
                </ImageWrapper>
            </Container>
        </IntroWrapper>
    );
};