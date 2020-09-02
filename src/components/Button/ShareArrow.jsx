import React from "react";
import styled from "styled-components";
import {ShareIcon} from "../svg/arrows/ShareIcon";

const ShareArrowStyled = styled(ShareIcon)`
  margin-left: 2vw;
  vertical-align: middle;
  height: 7vw;
  @media screen and (min-width: 1100px){
      height: 3.5vw;
  }
  @media screen and (max-height: 650px) and (orientation: landscape){
      height: 4vw;
    }
`

export const ShareArrow = () => {
    return (
        <ShareArrowStyled />
    );
};
