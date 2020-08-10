import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";
import {Text} from "../shared/Text";

const IntroWrapper = styled.div`
  background-color: #1E1D1C;
  height: 100vh;
  width: 100%;
  padding: 75px 45px 0 100px;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 100%;
`;


export const Final = props => {
    const { answers } = useContext(ProgressContext);
    return (
        <div>
            <h3>Твой результат</h3>
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
        </div>
    );
};