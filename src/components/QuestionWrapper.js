import React, { useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { questions } from '../questions.config';
import { ProgressContext } from '../contexts/ProgressContext';
import { QuestionLabel } from "./QuestionLabel";
import { RadioButton } from './RadioButton';
import { DesktopButton } from './Button/DesktopButton';
import { ButtonSize } from './Button/Button';

const QuestionWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 3fr 100px;
  grid-template-rows: 100px 1fr 90px;
  height: 100%;
  width: 100%;
  background-color: #585858;
`;

const QuestionLabelStyled = styled(QuestionLabel)`
  grid-area: 1/2/2/3;
  align-self: flex-end;
`;

const QuestionBoxStyled = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  padding-top: 60%;
  padding-right: 80px;
`;

const AnswersBoxStyled = styled.div`
  padding-top: 30px;
`;

const RadioButtonStyled = styled(RadioButton)`
  font-size: 16px;
`;

const ButtonsBoxStyled = styled.div`
  margin-top: auto;
`;

const QuestionTextStyled = styled.div`
  font-size: 18px;
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  grid-area: 1/3/4/4;
`;

export const QuestionWrapper = props => {
    const { question } = props;
    const { screen, answers, setAnswer, setPrev, setNext, isLocked, setIsLocked } = useContext(ProgressContext);

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;

    useEffect(() => {
        if (!answers[question.id]) setIsLocked(true);
        return () => setIsLocked(false);
    }, []);

    const handleAnswerChange = useCallback((answerId) => {
        setIsLocked(false);
        setAnswer(question.id, answerId);
    }, [question, setAnswer, setIsLocked]);

    return (
        <QuestionWrapperStyled>
            <QuestionLabelStyled current={questionNumber} total={questionsCount} />
            <QuestionBoxStyled>
                <QuestionTextStyled>{question.text}</QuestionTextStyled>
                <AnswersBoxStyled>
                    {question.answers.map(answer => (
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
                <ButtonsBoxStyled>
                    {/*<button onClick={setPrev}>Prev</button>*/}
                    <DesktopButton
                        size={ButtonSize.MD}
                        disabled={isLocked}
                        onClick={setNext}
                    >
                        Дальше
                    </DesktopButton>
                </ButtonsBoxStyled>
            </QuestionBoxStyled>
            <ImageStyled src={screen.image} alt='' />
        </QuestionWrapperStyled>
    );
};