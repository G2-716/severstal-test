import React from 'react';
import styled from 'styled-components';

const arrow = process.env.PUBLIC_URL + '/static/images/desktopArrow.svg';

const NextButton = styled.button`
  padding: 16px 18px 11px 30px; 
  background: #C3C47E;
  border: none;
  font-size:27px;
  color: white;
  margin-top: 37px;
`

const ArrowImg = styled.img`
  margin-left: 43px;
`

export const DesktopBtn = props => {
    return (
        <NextButton>
            {props.title}
            <ArrowImg src = {arrow} alt = "next" />
        </NextButton>
    )
}
