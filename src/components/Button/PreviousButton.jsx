import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { LeftArrowIcon } from "../svg/arrows/LeftArrowIcon";

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: baseline;
`

const ButtonLabel = styled.span`
  display: none;
  font-weight: 800;
  font-size: 18px;
  line-height: 95%;
  color: #9E9E9D;
  margin-left: 10px;
  
  @media screen and (min-width: 1100px) {
      display: initial;
  }
`

export const PreviousButton = (props) =>
{
    return (
        <ButtonStyled {...props}>
            <LeftArrowIcon width={10} height={12} fill={'#9E9E9D'} />
            <LeftArrowIcon width={10} height={12} fill={'#9E9E9D'} />
            <ButtonLabel>Вернуться</ButtonLabel>
        </ButtonStyled>
    );
}

