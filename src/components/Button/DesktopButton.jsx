import React from 'react';
import styled from 'styled-components';
import { Button, ButtonSize } from './Button';

const arrow = process.env.PUBLIC_URL + '/static/images/desktopArrow.svg';

const NextButton = styled(Button)`
  padding: 3.2323% 3.6363% 3.2323% 6.0606%; 
  background: #C3C47E;
  border: none;
  font-size: 1.875vw;
  color: white;
  
  &.${ButtonSize.MD} {
    font-size: 1.6962vh;
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
            <ArrowImg src={arrow} alt="" />
        </NextButton>
    )
}
