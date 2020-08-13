import React from 'react';
import styled from 'styled-components';

export const ButtonSize = {
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
};

const ButtonStyled = styled.button`
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  border:none;
  font-family: Muller, Tahoma, Geneva, sans-serif;
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
    @media screen and (max-width: 1100px) 
    {
      opacity: 0.4;
    }
  }
`;

export const Button = props => {
    const { size, className, ...restProps } = props;
    const fullClassName = [className, size].join(' ');
    return (
        <ButtonStyled {...restProps} className={fullClassName}>
            {props.children}
        </ButtonStyled>
    )
}