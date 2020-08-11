import React from 'react';
import styled from 'styled-components';
import { Button, ButtonSize } from './Button';
import { desktopArrow } from '../../constants/images';

const NextButton = styled(Button)`
  padding: 3.2323% 3.6363% 3.2323% 6.0606%; 
  background: #C3C47E;
  border: none;
  font-size: 1.875vw;
  color: white;
  
  &.${ButtonSize.MD} {
    font-size: 1.4583vw;
    padding: 2.2323% 2.6363% 2.2323% 5.0606%; 
  }
`

const ArrowImg = styled.img`
  margin-left: 43px;
  max-width: 15%;
  vertical-align: middle;
`

export const DesktopButton = props => {
    return (
        <NextButton {...props}>
            {props.children}
            <ArrowImg src={desktopArrow} alt="" />
        </NextButton>
    )
}
