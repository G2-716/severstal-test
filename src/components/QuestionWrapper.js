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
import {Subtitle} from "../shared/Subtitle";


const QuestionWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 7.5% 3fr 2fr;
  grid-template-rows: 7.888% 1fr 12.037%;
  height: 100%;
  width: 100%;
  background-color: #1E1D1C;

  @media screen and (min-width: 1700px) {
      grid-template-columns: 11% 1fr 46.25%;
      grid-template-rows: 18.4259% 1fr 8.3333%;
  }
  @media screen and (max-width: 1100px)  
  {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 7.8125vh 1fr auto;
    margin: auto;
    width: 75.5208vw;
    @media screen and (max-height: 800px) and (orientation: landscape){
        grid-template-columns: 1fr;
        grid-template-rows: 40.2vh 7.8125vh 1fr auto;
    } 
  }
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
   grid-template-rows: 39.2709vh 11.3333vh 1fr auto;
    padding-top: 2.0935vh;
    width: 100%;
  }
`;

const QuestionLabelStyled = styled(QuestionLabel)`

  grid-area: 1/2/2/3;
  align-self: flex-end;
  font-size: 1.1979vw;
   @media screen and (max-width: 1100px) 
  {
   grid-area: 2/1/3/2;
   font-size: 2.55vw;
     @media screen and (min-width: 640px) and (max-width: 1100px)
     {
        font-size: 2.15vh;
     } 
  }
    @media screen and (orientation: landscape) and (max-height: 640px) 
  {
    font-size: 2.0341vw;
  }
  
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
    padding-left: 8vw;
    font-size: 1.83vh;
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
      font-size: 1.8341vw;
    }
     
`;

const QuestionBoxStyled = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  padding-right: 2.7416vw;
  flex-shrink: 0;
  @media screen and (max-width: 1100px) 
  {
    grid-area: 3/1/4/2;
    padding-top: 5%;
  }
  
  @media screen and (max-height: 700px) and (min-width: 640px)
  {
    font-size: 2.7333vw;
    padding-top: 3.888%;
  }
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
    padding: 6.5vw 8vw 0;
  }
`;

// const Question = styled.p`
//   font-size: 1.71875vw;
//   //font-size: 33px;
//   font-weight: 600;
//   line-height: 114%;
//   letter-spacing: 0.015em;
//   padding-bottom: 9.537vh;
//   @media screen and (min-width: 640px) and (max-width: 1100px)
//   {
//     font-size: 2.45vh;
//     @media screen and (orientation: landscape) and (max-height: 700px)
//     {
//      font-size: 2.1333vw;
//     }
//   }
//   @media screen and (max-width: 640px)
//   {
//     font-size: 2.5341vw;
//     @media screen and (min-height: 560px )
//       {
//         font-size: 2.0936vh;
//         padding-bottom: 13.867vw;
//       }
//   }
//
// `

const Spacer = styled.div`
  flex-grow: ${({ value }) => value || 1};
  @media screen and (max-width: 1100px) 
  {
    display: none;
  }
`;

const AnswersBoxStyled = styled.div`
  
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
    padding: 0;
  }
`;

const ButtonsBoxStyled = styled.div`
  display: flex;
  align-items: center;
  grid-area: 3/2/4/2;
  padding: 4vh 2.7416vw 4vh 0;
  @media screen and (max-width: 1100px) {
    grid-area: 4/1/4/2;
    padding: 4vh 0;
  }
  @media screen and (max-width: 480px) and (orientation: portrait) 
  {
    padding-left: 8vw;
    padding-right: 8vw;
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
      margin: auto;
      width: 45vw;
    }
  } 
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 100%;
  background-color: #1E1D1C;
  overflow-x: hidden;
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
        <Wrapper>
            <QuestionWrapperStyled>
                <QuestionLabelStyled current={questionNumber} total={questionsCount} />
                <QuestionBoxStyled>
                    <Spacer value={2} />
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
                    {screenDelta < 0 && <NextButtonStyled onClick={setNext} />}
                </ButtonsBoxStyled>
                <ImageWrapper>
                    {image}
                </ImageWrapper>
            </QuestionWrapperStyled>
        </Wrapper>
    );
};