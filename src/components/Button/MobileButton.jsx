import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { respondTo } from '../../utils/respondTo';

const MobileButtonStyled = styled(Button)`
  width: 100%;
  padding: 0.6rem 0;
  background: #00569D;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.01em;
  color: white;
  
  ${respondTo.xs`
    font-size: 1.1rem;
    line-height: 1.1rem;
  `}
  
  ${respondTo.sm`
    padding: 0.8rem 0;
  `}
  
  ${respondTo.md`
    font-size: 1.8rem;
    line-height: 1.8rem;
    padding: 1rem 0;
  `}
`

export const MobileButton = props => {
    return <MobileButtonStyled {...props} />;
}