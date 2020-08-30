import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { RightArrowLongIcon } from "../svg/arrows/RightArrowLongIcon";

const NextButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px; 
  background: #C3C47E;
  font-size: 1.2rem;
  color: white;
`
const RightArrowStyled = styled(RightArrowLongIcon)`
  max-width: 25px;
  margin-left: 32px;
`

export const DesktopButton = props => {
    return (
        <NextButton {...props}>
            {props.children}
            <RightArrowStyled />
        </NextButton>
    )
}
