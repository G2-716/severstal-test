import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question5Image1, question5Image2, question6Image1, question6Image2} from '../../../constants/images';
import styled from "styled-components";

export const Question6 = (props) => {
    const ImageWrapper = styled.div`
      position: relative;
    `
    const FirstImg = styled.img`
      position: absolute;
      left: 42.9035%;
      top: 1.4814vh;
      height: 66.9444vh;
    `
    const YellowRectangle = styled.div`
      position: absolute;
      left: 35.8613%;
      top: 23.7037vh;
      background: #C3C47E;
      width: 2.0833vw;
      height: 18.5185vh;
      mix-blend-mode: lighten;
      z-index: 2;
    `
    const SecondImg = styled.img`
      position: absolute;
      left: 0;
      top: 50vh;
      height: 62.2222vh;
    `

    const createImage = () => {
        return (
            <ImageWrapper>
                <FirstImg src={question6Image1}/>
                <YellowRectangle/>
                <SecondImg src={question6Image2}/>
            </ImageWrapper>
        );
    }
    return (
        <QuestionWrapper
            question={getQuestionById('6')}
            image={createImage()}
            {...props}
        />
    );
};