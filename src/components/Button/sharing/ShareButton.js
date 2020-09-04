import React from 'react';
import styled from 'styled-components';

const ShareButtonStyled = styled.a`
  text-decoration: none;
  height: 5vh;
  margin-left: 1.0416vw;
  
  @media screen and (max-width: 1100px){
      height: 3.5vh;
      margin-left: 3.0416vw;
      
      @media screen and (orientation: landscape) and (max-height: 640px){
         margin-left: 0.7532vw;
         height: 2.5vw;
      }  
  }
   
`;

export const ShareButton = (props) => {
    return (
        <ShareButtonStyled {...props}>
            {props.children}
        </ShareButtonStyled>
    );
};