import React, { useContext, useCallback, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { questions } from '../questions.config';
import { ProgressContext } from '../contexts/ProgressContext';
import { QuestionLabel } from "./QuestionLabel";
import { RadioButton } from './shared/RadioButton';
import { shuffle } from '../utils/shuffle';
import { fade } from '../utils/keyframes';
import { PreviousButton } from './shared/buttons/PreviousButton';
import { NextButton } from './shared/buttons/NextButton';
import {Subtitle} from "./shared/Subtitle";
import { useBodyBackgroundColor } from '../hocs/useBodyBackgroundColor';
import { reachMetrikaGoal } from '../utils/reachMetrikaGoal';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #1E1D1C;
  overflow-x: hidden;
`

const QuestionWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 7.5% 3fr 2fr;
  grid-template-rows: 7.888vh 1fr auto;
  width: 100%;

  @media screen and (min-width: 1700px) {
      grid-template-columns: 11% 1fr 46.25%;
      grid-template-rows: 18.4259% 1fr auto;
  }
  
  @media screen and (max-width: 1100px)  
  {
    grid-template-columns: 1fr;
    grid-template-rows: 46.8101vh 3.8125vh 1fr 6.46875vh;
    margin:  0 auto;
    width: 75.5208vw;
    
     @media screen and (max-height: 640px) and (orientation: landscape){
         grid-template-rows: 40.2vh 7.8125vh 70vh 10vh;
      } 
  }
  
  @media screen and (max-width: 640px) and (orientation: portrait){
    grid-template-rows: 37.03125vh 8.3743vh 1fr 5.46875vh;
    width: 100%;
     @media (min-height: 560px) {
        grid-template-rows: 37.03125vh 5.3743vh 1fr 5.46875vh;
     }
  }
`;

const QuestionLabelStyled = styled(QuestionLabel)`

  grid-area: 1/2/2/3;
  align-self: flex-end;
   @media screen and (max-width: 1100px) 
  {
   grid-area: 2/1/3/2;
     
  }
  @media screen and (max-width: 640px) and (orientation: portrait) 
  {
    padding-left: 8vw;
  }
`;

const QuestionBoxStyled = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  padding-right: 2.7416vw;
  flex-shrink: 0;
  @media screen and (max-width: 1100px){
    display: grid;
    grid-area: 3/1/4/2;
    padding-top:  3.8828vh;
    grid-template-rows: 12.6953vh 20.996vh;
  }
  
  @media screen and (max-height: 700px) and (min-width: 640px){
    font-size: 2.7333vw;
    padding-top: 3.888%;
  }
  
  @media screen and (max-width: 640px) and (orientation: portrait){
    grid-template-rows: 8.33vh 20.996vh;
    padding: 6.5vh 4vw 0 8vw;
    @media (min-height: 560px) {
        grid-template-rows: 8.5683vh 19.996vh;
        padding: 3.7vh 4vw 0 8vw;
    }
  }
`;

const Spacer = styled.div`
  flex-grow: ${({ value }) => value || 1};
  
  @media screen and (max-width: 1100px){
    display: none;
  }
`;

const AnswersBoxStyled = styled.div`
  
  @media screen and (max-width: 640px) and (orientation: portrait) 
  {
    padding: 0;
  }
`;

const ButtonsBoxStyled = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 4vh 2.7416vw 4vh 0;
  grid-area: 2/2/3/2;
  align-self: flex-end;
  @media screen and (max-width: 1100px) {
    grid-area: 4/1/4/2;
    align-self: start;
    padding: 2vh 0;
  }
  @media screen and (max-width: 640px) and (orientation: portrait){
      padding: 0 8% ;
  }
  
`;

const NextButtonStyled = styled(NextButton)`
  margin-left: auto;
`;

const ImageWrapper = styled.div`
  grid-area: 1/3/4/4;
  overflow: hidden;
  
  @media screen and (max-width: 1100px) {
    grid-area: 1/1/1/3;
    position: relative;
    height: 100%;
    width: 100%;
        
    @media screen and (max-height: 800px) and (orientation: landscape){
      margin: 0 auto;
      width: 45vw;
    }
    
    @media screen and (min-width:640px) and (max-height: 480px) and (orientation: landscape){
      width: 33vw;
    }
    
    
  } 
`

export const QuestionWrapper = props => {
    const { question, image } = props;
    const [questionAnswers, setQuestionAnswers] = useState(question.answers);
    const { answers, screenDelta, setAnswer, setPrev, setNext } = useContext(ProgressContext);

    useBodyBackgroundColor('#1E1D1C');

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;

    const isFirstQuestion = questionNumber === 1;

    useLayoutEffect(() => {
        setQuestionAnswers(shuffle(question.answers));
    }, [question]);

    const onNext = () => {
        const goal = questionNumber === questionsCount ? 'finishtest' : `question${questionNumber}`;
        reachMetrikaGoal(goal);
        setNext();
    };

    const handleAnswerChange = useCallback((answerId) => {
        setAnswer(question.id, answerId);
        onNext();
    }, [question, setAnswer]);

    return (
        <Wrapper>
            <QuestionWrapperStyled>
                <QuestionLabelStyled current={questionNumber} total={questionsCount} />
                <QuestionBoxStyled>
                    <Spacer value={1} />
                    <Subtitle>{question.text}</Subtitle>
                    <AnswersBoxStyled>
                        {questionAnswers.map(answer => (
                            <RadioButton
                                key={answer.id}
                                name={question.id}
                                value={answer.id}
                                checked={answers[question.id] === answer.id}
                                onChange={handleAnswerChange}
                            >
                                {answer.text}
                            </RadioButton>
                        ))}
                    </AnswersBoxStyled>
                    <Spacer value={1} />

                </QuestionBoxStyled>
                <ButtonsBoxStyled>
                    {!isFirstQuestion && <PreviousButton onClick={setPrev} />}
                    {screenDelta < 0 && <NextButtonStyled onClick={onNext} />}
                </ButtonsBoxStyled>
                <ImageWrapper>
                    {image}
                </ImageWrapper>
            </QuestionWrapperStyled>
        </Wrapper>
    );
};