import React from "react";
import styled from "styled-components";
import { respondTo } from '../utils/respondTo';

const QuestionLabelStyled = styled.div`
  font-weight: 400;
  white-space: nowrap;
  font-size: 0.8rem;
  
  ${respondTo.xmd`
    font-size: 0.94rem;
  `}
`;

export const QuestionLabel = props => {
    const { current, total, className } = props;
    return (
        <QuestionLabelStyled className={className}>
            Вопрос {current}/{total}
        </QuestionLabelStyled>
    );
};