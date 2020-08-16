import React, { useContext, useCallback, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { questions } from '../questions.config';
import { ProgressContext } from '../contexts/ProgressContext';
import { QuestionLabel } from "./QuestionLabel";
import { RadioButton } from './RadioButton';
import { DesktopButton } from './Button/DesktopButton';
import { shuffle } from '../utils/shuffle';
import { fade } from '../utils/keyframes';
import {ButtonSize} from './Button/Button';
import { Text } from '../shared/Text';
import {ButtonArrow} from "./Button/ButtonArrow";


const QuestionWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 11% 2fr 3fr 11%;
  grid-template-rows: 11% 1fr 15%;
  height: 100%;
  width: 100%;
  background-color: #585858;
  @media screen and (max-width: 1100px) 
  {
    background-color: #3A3939;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto;
   @media screen and (max-height: 300px) and (orientation: landscape) 
   {
    grid-template-rows: 1fr 1fr 40px;
   }
  }
  
`;

const QuestionLabelStyled = styled(QuestionLabel)`
  grid-area: 1/2/2/3;
  align-self: flex-end;
   @media screen and (max-width: 1100px) 
  {
   position: absolute;
   top: 4.6875%;
   left:8.3333%;
   z-index: 2;
   font-size: 2.94vw;
  }
    @media screen and (orientation: landscape) and (max-height: 640px) 
  {
    font-size: 2.0341vw;
  }
  
`;

const QuestionBoxStyled = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  padding-top: 23%;
  @media screen and (max-width: 1100px) 
  {
    grid-area: 2/1/3/2;
    padding: 5% 3.888% 0;
  }
  
  @media screen and (max-height: 700px) and (min-width: 640px)
  {
    font-size: 2.7333vw;
    padding: 2% 3.888% 0;
  }
`;


const Spacer = styled.div`
  flex-grow: ${({ value }) => value || 1};
  @media screen and (max-width: 1100px) 
  {
    display: none;
  }
`;

const AnswersBoxStyled = styled.div`
  padding-top: 4.2%;
`;

const RadioButtonStyled = styled(RadioButton)`
  font-size: 1.25vw;
   @media screen and (min-width: 640px) and (max-width: 1199px)
  {
    font-size: 2.15vw;
    @media screen and (orientation: landscape) and (max-height: 700px)
    {
     font-size: 2.0833vw;
    }
  }
  @media screen and (max-width: 640px)
  {
    font-size: 2.4841vw;
    @media screen and (min-height: 560px ) 
      {
        font-size: 2.2841vh;
      }
     
    @media screen and (orientation: landscape){
      font-size: 2.0841vw;
    }
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 2.0341vw;
    }
`;

const ButtonsBoxStyled = styled.div`
  grid-area: 3/2/4/2;
  @media screen and (max-width: 1100px) 
  {
    display: none;
  }
`;


const MobileButtonsBox = styled.div`
    display: flex;
    grid-area: 3/1/4/2;
    padding: 5% 3.888%;
    justify-content: space-between;
`

const ImageWrapper = styled.div`
    grid-area: 1/3/4/4;
    @media screen and (max-width: 1100px) 
      {
        grid-area: 1/1/1/3;
        overflow: hidden;
        position: relative;
        height: 100%;
        width: 100%;
      }
`
const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  grid-area: 1/3/4/4;
  animation: ${fade} 0.3s ease-out both;
  @media screen and (max-width: 1100px)
    { 
      height: auto;
      position:absolute;
      top:-43%;
      width:100%;
      overflow: hidden;
    }
  @media screen and (max-width: 1100px) and (min-height: 700px)
      {
        top:-23%;
      }
  
      
`;

export const QuestionWrapper = props => {
    const { question, image } = props;
    const [questionAnswers, setQuestionAnswers] = useState(question.answers);
    const { answers, setAnswer, setPrev, setNext, isLocked, setIsLocked } = useContext(ProgressContext);

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;

    useLayoutEffect(() => {
        if (!answers[question.id]) setIsLocked(true);
        return () => setIsLocked(false);
    }, []);

    useLayoutEffect(() => {
        setQuestionAnswers(shuffle(question.answers));
    }, [question]);

    const handleAnswerChange = useCallback((answerId) => {
        setIsLocked(false);
        setAnswer(question.id, answerId);
    }, [question, setAnswer, setIsLocked]);

    return (
        <QuestionWrapperStyled>
            <QuestionLabelStyled current={questionNumber} total={questionsCount} />
            <QuestionBoxStyled>
                <Spacer value={2} />
                <Text>{question.text}</Text>
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
                <Spacer value={1} />

            </QuestionBoxStyled>
            <ButtonsBoxStyled>
                <DesktopButton
                    size={ButtonSize.MD}
                    disabled={isLocked}
                    onClick={setNext}
                >
                    Дальше
                </DesktopButton>
            </ButtonsBoxStyled>
            <MobileButtonsBox>
                <ButtonArrow
                    direction={'left'}
                    onClick={setPrev}
                />
                <ButtonArrow
                    direction={'right'}
                    onClick={setNext}
                    disabled={isLocked}
                />
            </MobileButtonsBox>
            <ImageWrapper>
                <ImageStyled src={image} alt='' />
            </ImageWrapper>
        </QuestionWrapperStyled>
    );
};