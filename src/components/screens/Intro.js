import React, { useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";
import {DesktopButton} from "../Button/DesktopButton";
import {Text} from "../shared/Text";

const intro = process.env.PUBLIC_URL + '/static/images/intro.png';
const logo = process.env.PUBLIC_URL + '/static/images/logo.svg';

const IntroWrapper = styled.div`
  background-color: #1E1D1C;
  height: 100vh;
  width: 100%;
  padding: 10px 100px;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 100%;
`;

const IntroTitle = styled.h1`
  font-weight: 800;
  font-size: 90px;
  line-height: 95%;
  margin: 65px 0 37px;
`;

const InfoWrapper = styled.div`
  padding-top: 20px;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`

const ImageStyled = styled.img`
  height: 100%;
  width: auto;
`

const DesktopButtonStyled = styled(DesktopButton)`
  margin-top: 37px;
`

export const Intro = props => {
    const { setNext } = useContext(ProgressContext);
    return (
        <IntroWrapper>
            <InfoWrapper>
                <img src={logo} alt={''}/>
                <IntroTitle>Лидер перемен</IntroTitle>
                <Text>
                    Кого зовут лидерами перемен? Людей, осставляющих вмятину во Вселенной.
                    Людей, разрушающих рамки привычного, раздвинающих границы возможного,
                    объединяющихся друг с другом и меняющих мир.
                </Text>
                <br />
                <Text>
                    Генри Форд, Мария Кюри,
                    Стив Джобс и принцесса Диана. Какой лидер перемен ты?
                    Пройди тест, чтобы узнать!
                </Text>
                <DesktopButtonStyled onClick={setNext}>Пройти тест</DesktopButtonStyled>
            </InfoWrapper>
            <ImgWrapper>
                <ImageStyled src={intro} alt={''} />
            </ImgWrapper>
        </IntroWrapper>
    );
};