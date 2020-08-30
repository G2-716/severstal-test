import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question4Image1, question4Image2} from '../../../constants/images';
import styled from "styled-components";

export const Question4 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 13.8539%;
      top: 2.5925vh;
      height: 45vh;
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 7.3047%;
      top: 17.6851vh;
      background: #C3C47E;
      width: 8.9583vw;
      height: 39.074vh;
      mix-blend-mode: lighten;
      z-index: 2;
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 0;
      top: 62.2222vh;
      height: 35.6481vh;
    `
    const BlueRectangle = styled.div`
      position: absolute;
      left: 39.0428%;
      top: 82.3148vh;
      background: #00569D;
      width: 22.1354vw;
      height: 12.5vh;
      mix-blend-mode: lighten;
      z-index: 2;
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question4Image1}/>
                <YellowRectangle/>
                <SecondImg src={question4Image2}/>
                <BlueRectangle />
            </ImageWrapper>
        );
    }

    return (
        <QuestionWrapper
            question={getQuestionById('4')}
            image={createImage()}
            {...props}
        />
    );
};