import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { screens } from '../screens.config';
import { questions } from "../questions.config";
import { ProgressProvider } from "../contexts/ProgressContext";
import { preloadImage } from '../utils/preloadImage';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DEFAULT_ANSWERS = questions.reduce((res, question) => ({ ...res, [question.id]: null }), {});

function App() {
  /////////////////// for development ////////////////////////////////////
  const urlParams = new URLSearchParams(window.location.search);
  const screenParam = urlParams.get('screen');
  ////////////////////////////////////////////////////////////////////////

  const [currentScreen, setCurrentScreen] = useState(+screenParam || 0);
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

  const { component, ...screen } = screens[currentScreen] || {};
  const Component = component || (() => null);

  useEffect(() => {
    const nextScreen = screens[currentScreen + 1];
    let clear = null;
    if (nextScreen && nextScreen.image) {
      clear = preloadImage(nextScreen.image);
    }
    return () => clear?.();
  }, [currentScreen]);

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
