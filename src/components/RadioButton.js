import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.57);
  border-radius: 50%;
  margin-right: 14px;
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  line-height: 1.87;
  cursor: pointer;

  & ${InputStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #3D8FE3;
  }
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
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
                {children}
            </LabelStyled>
        </WrapperStyled>
    )
};