import React, { useState } from 'react';
import styled from 'styled-components'
import { screens } from '../screens.config';
import { questions } from "../questions.config";
import { ProgressProvider } from "../contexts/ProgressContext";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DEFAULT_ANSWERS = questions.reduce((res, question) => ({ ...res, [question.id]: null }), {});

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
  const [isLocked, setIsLocked] = useState(false);

  const setPrev = () => {
    setCurrentScreen(screen => {
      return (screen > 0 ? screen - 1 : screen);
    });
  };

  const setNext = () => {
    setCurrentScreen(screen => {
      return (screen < screens.length - 1 ? screen + 1 : screen);
    });
  };

  const setAnswer = (questionId, answerId) => {
    setAnswers(answers => ({ ...answers, [questionId]: answerId }));
  };

  const screen = screens[currentScreen];
  const Component = screen?.component || (() => null);

  const progressProviderValue = {
    screen,
    answers,
    setAnswer,
    setNext,
    setPrev,
    isLocked,
    setIsLocked,
  };

  return (
    <AppWrapper>
      <ProgressProvider value={progressProviderValue}>
          <Component />
      </ProgressProvider>
    </AppWrapper>
  );
}

export default App;
