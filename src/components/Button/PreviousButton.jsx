import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { LeftArrowIcon } from "../svg/arrows/LeftArrowIcon";

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: baseline;
  align-self: flex-start;
  @media screen and (max-height: 640px) and (max-width: 1100px) and (orientation: landscape){
      align-self: flex-end;
  }
`

const ButtonLabel = styled.span`
  display: none;
  font-weight: 800;
  font-size: 1.30208vw;
  line-height: 95%;
  color: #9E9E9D;
  margin-left: 10px;
  @media screen and (min-width: 1100px) {
      display: initial;
          //@media screen and (orientation: portrait) {
          //        font-size: 2.3148vh;
          //}
  }
`

const Icons = styled.div`
  display: flex;
  width: 1.8vw;
  @media screen and (max-width: 1100px) {
    width: 5vw;
  }
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
      width: 5vh;
  }
  @media screen and (max-width: 1100px) and (min-width: 640px) {
      width: 4.8vh;
  }
`

export const PreviousButton = (props) =>
{
    return (
        <ButtonStyled {...props}>
            <Icons>
                <LeftArrowIcon fill={'#9E9E9D'} height={'100%'} />
                <LeftArrowIcon fill={'#9E9E9D'} height={'100%'} />
            </Icons>
            <ButtonLabel>Вернуться</ButtonLabel>
        </ButtonStyled>
    );
}

