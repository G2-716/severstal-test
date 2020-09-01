import React, { useContext, useCallback, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { questions } from '../questions.config';
import { ProgressContext } from '../contexts/ProgressContext';
import { QuestionLabel } from "./QuestionLabel";
import { RadioButton } from './RadioButton';
import { shuffle } from '../utils/shuffle';
import { fade } from '../utils/keyframes';
import { PreviousButton } from './Button/PreviousButton';
import { NextButton } from './Button/NextButton';
import { respondTo } from '../utils/respondTo';
import { Spacer } from './Spacer';


const QuestionWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #1E1D1C;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  
  ${respondTo.xs`
    max-width: 620px;
    margin: 0 auto;
  `}

  ${respondTo.xmd`
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  `}
`

const ContentWrapper = styled.div`
  order: 2;
  flex: 3 0 60%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  z-index: 1;
  
  ${respondTo.sm`
    padding: 40px 30px 70px;
  `}
  
  ${respondTo.xmd`
    order: 1;
    flex: 2;
    padding: 70px 120px;
  `}
`

const QuestionLabelStyled = styled(QuestionLabel)`
  margin-top: 40px;
`;

const QuestionBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

const QuestionText = styled.p`
  font-weight: 800;
  line-height: 114%;
  letter-spacing: 0.015em;
  font-size: 1rem;
  
  ${respondTo.xmd`
    font-size: 1.1rem;
  `}
`;

const AnswersBoxStyled = styled.div`
  margin-top: 28px;
  
  ${respondTo.sm`
    margin-top: 60px;
  `}
  
  ${respondTo.xmd`
    margin-top: 80px;
  `}
`;

const RadioButtonStyled = styled(RadioButton)``;

const ButtonsBoxStyled = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin-top: auto;
`;

const NextButtonStyled = styled(NextButton)`
  margin-left: auto;
`;

const ImageWrapper = styled.div`
  order: 1;
  flex: 2 0 40%;
  width: 100%;
  overflow: hidden;
  animation: ${fade} 0.3s ease-out both;
  
  ${respondTo.xmd`
    flex: 3;
    order: 2;
    
    &:after {
      content: none;
    }
  `}
`

const SpacerStyled = styled(Spacer)`
  display: none;

  ${respondTo.xmd`
    display: block;
  `}
`

export const QuestionWrapper = props => {
    const { question, image } = props;
    const [questionAnswers, setQuestionAnswers] = useState(question.answers);
    const { answers, screenDelta, setAnswer, setPrev, setNext } = useContext(ProgressContext);

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;

    const isFirstQuestion = questionNumber === 1;

    useLayoutEffect(() => {
        setQuestionAnswers(shuffle(question.answers));
    }, [question]);

    const handleAnswerChange = useCallback((answerId) => {
        setAnswer(question.id, answerId);
        setNext();
    }, [question, setAnswer]);

    return (
        <QuestionWrapperStyled>
            <Container>
                <ContentWrapper>
                    <QuestionLabelStyled current={questionNumber} total={questionsCount} />
                    <SpacerStyled value={4} />
                    <QuestionBoxStyled>
                        <QuestionText>{question.text}</QuestionText>
                        <AnswersBoxStyled>
                            {questionAnswers.map(answer => (
                                <RadioButtonStyled
                                    key={answer.id}
                                    name={question.id}
                                    value={answer.id}
                                    checked={answers[question.id] === answer.id}
                                    onChange={handleAnswerChange}
                                >
                                    {answer.text}
                                </RadioButtonStyled>
                            ))}
                        </AnswersBoxStyled>
                    </QuestionBoxStyled>
                    <SpacerStyled value={3} />
                    <ButtonsBoxStyled>
                        {!isFirstQuestion && <PreviousButton onClick={setPrev} />}
                        {screenDelta < 0 && <NextButtonStyled onClick={setNext} />}
                    </ButtonsBoxStyled>
                </ContentWrapper>
                <ImageWrapper>
                    {image}
                </ImageWrapper>
            </Container>
        </QuestionWrapperStyled>
    );
};