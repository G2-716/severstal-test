import React from 'react';
import styled from 'styled-components';

const StartButton = styled.button`
  padding: 15px 30px 6px 96px; 
  background: #00569D;
  border: none;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: white;
  margin-top: 150px;
`

export const MobileBtn = props => {
    return (
        <StartButton>
            {props.title}
        </StartButton>
    )
}