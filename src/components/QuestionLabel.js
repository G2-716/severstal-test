import React from "react";
import styled from "styled-components";
import {Text} from "./shared/Text";

const QuestionLabelStyled = styled(Text)`
  font-weight: 400;
  white-space: nowrap;
  font-size: 1.4375vw;
`;

export const QuestionLabel = props => {
    const { current, total, className } = props;
    return (
        <QuestionLabelStyled className={className}>
            Вопрос {current}/{total}
        </QuestionLabelStyled>
    );
};