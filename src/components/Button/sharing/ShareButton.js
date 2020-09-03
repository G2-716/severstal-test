import React from 'react';
import styled from 'styled-components';

const ShareButtonStyled = styled.a`
  text-decoration: none;
`;

export const ShareButton = (props) => {
    return (
        <ShareButtonStyled {...props}>
            {props.children}
        </ShareButtonStyled>
    );
};