import styled from "styled-components";
import { respondTo } from '../utils/respondTo';

export const Text = styled.p`
  font-size: 0.8rem;
  line-height: 113%;
  letter-spacing: 0.01em;
  margin-top: 0.8rem;
    
  ${respondTo.xs`
    font-size: 1rem;
    margin-top: 1rem;
  `}
  
  ${respondTo.md`
    font-size: 1.4rem;
    margin-top: 1.4rem;
  `}
  
  ${respondTo.xmd`
    font-size: 1rem;
    margin-top: 1rem;
  `}
`