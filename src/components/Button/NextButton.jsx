import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { RightArrowIcon } from '../svg/arrows/RightArrowIcon';
import { respondTo } from '../../utils/respondTo';

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: baseline;
`

const ButtonLabel = styled.span`
  display: none;
  font-weight: 800;
  font-size: 0.94rem;
  line-height: 95%;
  color: #9E9E9D;
  margin-right: 10px;
  
  ${respondTo.xmd`
    display: initial;
  `}
`

export const NextButton = (props) =>
{
    return (
        <ButtonStyled {...props}>
            <ButtonLabel>Дальше</ButtonLabel>
            <RightArrowIcon width={10} height={12} fill={'#9E9E9D'} />
            <RightArrowIcon width={10} height={12} fill={'#9E9E9D'} />
        </ButtonStyled>
    );
}

