import React from 'react';
import styled from 'styled-components';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';

const ShareButtonStyled = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.5208vw;
  @media screen and (max-width: 1100px) {
    padding: 1.302vw;
  }
  @media screen and (max-width: 640px) {
     padding: 2.1333vw;
  }
`;

export const ShareButton = (props) => {
    const handleClick = () => {
        reachMetrikaGoal('share');
    };

    return (
        <ShareButtonStyled
            {...props}
            target="_blank"
            onClick={handleClick}
        >
            {props.children}
        </ShareButtonStyled>
    );
};