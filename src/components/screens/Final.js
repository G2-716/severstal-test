import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";
import {Text} from "../shared/Text";

const resultElon = process.env.PUBLIC_URL + '/static/images/result_Elon.png';
const logo = process.env.PUBLIC_URL + '/static/images/logo.svg';

const FinalWrapper = styled.div`
  background-color: #1E1D1C;
  height: 100vh;
  width: 100%;
  padding: 75px 100px 0 100px;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 100%;
`;
const ResultTitle = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.015em;
  margin-bottom: 40px;
`
const LogoWrapper = styled.div`
  position: absolute;
  width: 196px;
  height: 61px;
  top: 60px;
  right: 45px;
`
const InfoWrapper = styled.div`
  padding: 180px 0 0 60px;
`

export const Final = props => {
    const { answers } = useContext(ProgressContext);
    return (
        <FinalWrapper>
            <img  style={{height:'100%'}} src={resultElon} alt={''}/>
            <InfoWrapper>
                <LogoWrapper>
                    <img src={logo} alt={''}/>
                </LogoWrapper>
                <ResultTitle>Твой результат</ResultTitle>
                <Text>
                    Ты точно знаешь, сколько коробок пиццы съедят твои друзья на вечеринке
                    (и сколько бутылок воды припасти на утро;) ) Тебе не говорили, что ты похож
                    на основателя Алибабы – Джека Ма?
                </Text>
                <br />
                <Text>
                    Хочешь, чтобы было так? Проходи отбор на
                    лидерскую программу компании “Северсталь”
                </Text>
            </InfoWrapper>
        </FinalWrapper>
    );
};