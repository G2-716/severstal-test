import React from 'react';
import styled from 'styled-components';
import { Button, ButtonSize } from './Button';

const arrow = process.env.PUBLIC_URL + '/static/images/desktopArrow.svg';

const NextButton = styled(Button)`
  padding: 16px 18px 11px 30px; 
  background: #C3C47E;
  border: none;
  font-size: 27px;
  color: white;
  text-align: center;
  
  &.${ButtonSize.MD} {
    font-size: 21px;
  }
`

const ArrowImg = styled.img`
  margin-left: 43px;
`

export const DesktopButton = props => {
    return (
        <NextButton {...props}>
            {props.children}
            <ArrowImg src={arrow} alt="next" />
        </NextButton>
    )
}
