import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.57);
  border-radius: 50%;
  margin-right: 12px;
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1100px) 
  { 
  }
  
  & ${InputStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #3D8FE3;
    @media screen and (max-width: 1100px) 
      { 
        top: -1px;
        left: -1px;
        width: 14px;
        height: 14px;
        border: 1px solid white;
        background-color: #FFFFFF;
      }
  }
`;

const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const TextStyled = styled.span`
  margin-top: 2px;
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  
  & + & {
    margin-top: 10px;
  }
`;

export const RadioButton = (props) => {
    const { name, value, checked, children, onChange, className } = props;
    return (
        <WrapperStyled>
            <LabelStyled className={className}>
                <InputStyled
                    type='radio'
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={() => onChange(value)}
                />
                <RadioIconStyled />
                <TextWrapperStyled>
                    <TextStyled>{children}</TextStyled>
                </TextWrapperStyled>
            </LabelStyled>
        </WrapperStyled>
    )
};