import React from "react";
import styled from "styled-components";
import {Button} from "./Button";
import { ShareIcon } from "../svg/ShareIcon";

const ButtonStyled = styled(Button)`
  display: flex;
  margin-top: 8.1481vh;
  align-items: center;
  grid-area:2/2/2/2;
  padding: 1.389vh 1.04vw 1.39vh 1.33vw;
  background: #C3C47E;
  border: none;
  font-size: 1.875vw;
  color: white;
   @media screen and (max-width: 1100px){
          display: none;
   }    
`
const ButtonLabel = styled.span`
  font-size: 21px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: white;
  margin-right: 4.8404vw;
  @media screen and (max-width: 1100px){
          display: none;
   }
`
export const DesktopShare = (props) =>
{
    return (
        <ButtonStyled {...props}>
            <ButtonLabel>Поделиться</ButtonLabel>
            <ShareIcon />
        </ButtonStyled>
    );
}
