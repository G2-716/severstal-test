import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question3Image1,question3Image2} from '../../../constants/images';
import styled from "styled-components";

export const Question3 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 0;
      top: 1.4814vh;
      height: 28.4259vh;
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 41.7596%;
      top: 6.6666vh;
      background: #C3C47E;
      width: 9.6875vw;
      height: 86.574vh;
      mix-blend-mode: lighten;
      z-index: 2;
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 17.2242%;
      top: 33.1481vh;
      height: 34.9074vh;
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question3Image1}/>
                <YellowRectangle/>
                <SecondImg src={question3Image2}/>
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('3')}
            image={createImage()}
            {...props}
        />
    );
};