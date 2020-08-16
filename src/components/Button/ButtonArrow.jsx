import React from "react";
import styled from "styled-components";
import {MobileRightArrow} from "../svg/Arrows/MobileRightArrow";
import {MobileLeftArrow} from "../svg/Arrows/MobileLeftArrow";
import {Button} from "./Button";

const ButtonArrowStyled = styled(Button)`
  background: none;
  width: 23px;
  height: 23px;
  @media screen and (min-width: 1100px) 
     {
        display: none;
     }
 @media screen and (max-height: 250px) {
        width: 16px;
        height: 16px;
 }
`

export const ButtonArrow = (props) =>
{
    return (
        <ButtonArrowStyled {...props}>
            {props.direction==='right' ? <MobileRightArrow  /> :  <MobileLeftArrow />}
        </ButtonArrowStyled>
    );
}

