import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../utils/respondTo';

const InputStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.57);
  border-radius: 50%;
  margin-right: 12px;
  
  ${respondTo.xmd`
    width: 16px;
    height: 16px;
  `}
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  & ${InputStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ffffff;
    
    ${respondTo.xmd`
      width: 12px;
      height: 12px;
    `}
  }
`;

const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const TextStyled = styled.span`
  margin-top: 2px;
  font-size: 0.8rem;
  line-height: 112.5%;
  letter-spacing: 0.015em;
  
  ${respondTo.xmd`
    font-size: 0.94rem;
  `}
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