import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';


const MobileButtonStyled = styled(Button)`
  width: 100%;
  padding: 3.1676% 0;
  background: #00569D;
  border: none;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: white;
  margin-top: 150px;
`

export const MobileButton = props => {
    return <MobileButtonStyled {...props} />;
}