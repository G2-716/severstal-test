import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question2Image1, question2Image2} from '../../../constants/images';
import styled from "styled-components";

export const Question2 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 5.26%;
      top: -1.7592vh;
      height: 71.2962vh;
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 19.7064%;
      top: 86.2962vh;
      background: #00569D;
      width: 26.8229vw;
      height: 10.3703vh;
      mix-blend-mode: lighten;
      z-index: 2;
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 0;
      top: 65.0925vh;
      height: 35.3703vh;
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question2Image1} />
                <BlueRectangle />
                <SecondImg src={question2Image2} />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('2')}
            image={createImage()}
            {...props}
        />
    );
};