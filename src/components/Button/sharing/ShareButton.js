import React from 'react';
import styled from 'styled-components';

const ShareButtonStyled = styled.a`
  display: flex;
  text-decoration: none;
  padding: 8px;
`;

export const ShareButton = (props) => {
    return (
        <ShareButtonStyled {...props}>
            {props.children}
        </ShareButtonStyled>
    );
};