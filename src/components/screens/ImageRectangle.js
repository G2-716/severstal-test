import React from 'react';
import styled from 'styled-components';
import { AnswerType } from '../../answerTypes.config';

const ImageRectangleStyled = styled.div`
  ${({ styles }) => styles};
`;

const rectangleStyles = {
    [AnswerType.Engineering]: `
        width: 300px;
        height: 300px;
        position: absolute;
        background-color: red;
    `,
    [AnswerType.ProjectOffice]: `
        width: 300px;
        height: 300px;
        position: absolute;
        background-color: blue;
    `,
    [AnswerType.Finance]: ``,
    [AnswerType.Sales]: ``,
    [AnswerType.Purchases]: ``,
};

export const ImageRectangle = ({ resultType, className }) => {
    return (
        <ImageRectangleStyled
            className={className}
            styles={rectangleStyles[resultType]}
        />
    );
};