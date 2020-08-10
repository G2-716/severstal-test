import React from "react";
import styled from "styled-components";

const QuestionLabelStyled = styled.div`
  font-weight: 600;
  white-space: nowrap;
  font-size: 18px;
`;

export const QuestionLabel = props => {
    const { current, total, className } = props;
    return (
        <QuestionLabelStyled className={className}>
            Вопрос {current}/{total}
        </QuestionLabelStyled>
    );
};