import React from 'react';
import styled from 'styled-components';
import { Button, ButtonSize } from './Button';
import {RightArrowLongIcon} from "../svg/arrows/RightArrowLongIcon";
import {RightArrowIcon} from "../svg/arrows/RightArrowIcon";

const StartButtonStyled = styled(Button)`
  background: none;
  display: flex;
  border: none;
  font-size: 1.822vw;
  color: #9E9E9D;
  align-items: center;
  margin-top: 6.6666vh;
  font-weight: 800;
  &.${ButtonSize.MD} {
    font-size: 1.4583vw;
  }
  @media screen and (max-width: 1199px) {
    font-size: 3.90625vw;
  }
  @media screen and (max-width: 640px) {
      font-size: 4.8vw;
      margin-top: 4.064vh;
   }
`
const Icons = styled.div`
  display: flex;
  width: 1.8vw;
  margin-left: 24px;
  @media screen and (max-width: 1200px) {
    width: 5vw;
  }
  @media screen and (max-width: 640px) {
    margin-left: 18px;
  }
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
      width: 3.6vh;
      
  }
  @media screen and (max-width: 1100px) and (min-width: 640px) {
      width: 4.8vh;
  }
`

export const StartButton = props => {
    return (
        <StartButtonStyled {...props}>
            Пройти тест
            <Icons>
                <RightArrowIcon fill={'#9E9E9D'} height={'100%'} />
                <RightArrowIcon fill={'#9E9E9D'} height={'100%'} />
            </Icons>
        </StartButtonStyled>
    )
}
