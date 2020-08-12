import React from "react";
import styled from "styled-components";
import {Share} from "../svg/Arrows/Share";

const ShareArrowStyled = styled(Share)`
  margin-left: 2vw;
  vertical-align: middle;
  height: 6vw;
  @media screen and (min-width: 1100px){
      height: 3.5vw;
  }
`

export const ShareArrow = () =>
{
    return (
        <ShareArrowStyled />
    );
}
