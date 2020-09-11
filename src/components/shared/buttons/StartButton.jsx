import React from 'react';
import styled from 'styled-components';
import { Button, ButtonSize } from './Button';
import {RightArrowIcon} from "../svg/arrows/RightArrowIcon";

const StartButtonStyled = styled(Button)`
  background: none;
  display: flex;
  border: none;
  font-size: 1.8229vw;
  color: #9E9E9D;
  align-items: center;
  margin-top: 5.6666vh;
  margin-bottom: 5.6666vh;
  font-weight: 800;
  &.${ButtonSize.MD} {
    font-size: 1.4583vw;
  }
  
  @media screen and (min-width: 640px) and (max-width: 1100px){
    font-size: 2.93181vh;
    
    @media screen and (orientation: landscape) and (max-height: 700px){
      font-size: 2.84086vw;
    }
  }
  
  @media screen and (max-width: 640px){
    font-size: 3.19384vw;
    margin: 4.064vh 0;
    @media screen and (min-height: 560px){
        font-size: 2.21675vh;
        margin-top: 2.364vh;
    }
     
    @media screen and (orientation: landscape){
      font-size: 2.67955vw;
    }
  }
`

const Icons = styled.div`
  display: flex;
  width: 2.1875vw;
  margin-left: 24px;
  
  @media screen and (max-width: 640px) {
     width: 6.4vw;
    margin-left: 18px;
  }
  
  @media screen and (max-width: 1100px) {
    width: 4.6785vw;
    @media (orientation: landscape){
        width: 3.6785vw;
    }
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
