import React from 'react';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  color: #ffffff;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform-origin: center;
  transform: scale(0.6);
  
  @media screen and (min-width: 1100px) {
      transform: scale(1);
  }
`;

const Spin = styled.div`
  transform-origin: 40px 40px;
  animation: spin 0.8s linear infinite;
  
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
  }
  
  &:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.7s;
  }
  
  &:nth-child(2) {
    transform: rotate(45deg);
    animation-delay: -0.6s;
  }
  
  &:nth-child(3) {
    transform: rotate(90deg);
    animation-delay: -0.5s;
  }
  
  &:nth-child(4) {
    transform: rotate(135deg);
    animation-delay: -0.4s;
  }
  
  &:nth-child(5) {
    transform: rotate(180deg);
    animation-delay: -0.3s;
  }
  
  &:nth-child(6) {
    transform: rotate(225deg);
    animation-delay: -0.2s;
  }
  
  &:nth-child(7) {
    transform: rotate(270deg);
    animation-delay: -0.1s;
  }
  
  &:nth-child(8) {
    transform: rotate(315deg);
    animation-delay: 0s;
  }
  
  @keyframes spin {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Loader = (props) => {
    return (
        <LoaderStyled>
            <Spin />
            <Spin />
            <Spin />
            <Spin />
            <Spin />
            <Spin />
            <Spin />
            <Spin />
        </LoaderStyled>
    );
};