import { Intro } from './components/screens/Intro';
import { Question1 } from './components/screens/questions/Question1';
import { Question2 } from './components/screens/questions/Question2';
import { Question3 } from './components/screens/questions/Question3';
import { Question4 } from './components/screens/questions/Question4';
import { Question5 } from './components/screens/questions/Question5';
import { Question6 } from './components/screens/questions/Question6';
import { Question7 } from './components/screens/questions/Question7';
import { Question8 } from './components/screens/questions/Question8';
import { Question9 } from './components/screens/questions/Question9';
import { Question10 } from './components/screens/questions/Question10';
import { Final } from './components/screens/Final';

import {
  questionImage1,
  questionImage2,
  questionImage3,
  questionImage4,
  questionImage5,
  questionImage6,
  questionImage7,
  questionImage8,
  questionImage9,
  questionImage10,
  elonMuskImage,
  jackMaImage,
  tonyRobbinsImage,
  warrenBuffettImage,
  peterDruckerImage,
} from './constants/images';

export const ScreenType = {
  Intro: 'intro',
  Question: 'question',
  Final: 'final',
};

export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
    preloadImages: [questionImage1],
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
    preloadImages: [questionImage2],
    image: questionImage1,
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
    preloadImages: [questionImage3],
    image: questionImage2,
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
    preloadImages: [questionImage4],
    image: questionImage3,
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
    preloadImages: [questionImage5],
    image: questionImage4,
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
    preloadImages: [questionImage6],
    image: questionImage5,
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
    preloadImages: [questionImage7],
    image: questionImage6,
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
    preloadImages: [questionImage8],
    image: questionImage7,
  },
  {
    name: 'question-8',
    component: Question8,
    type: ScreenType.Question,
    preloadImages: [questionImage9],
    image: questionImage8,
  },
  {
    name: 'question-9',
    component: Question9,
    type: ScreenType.Question,
    preloadImages: [questionImage10],
    image: questionImage9,
  },
  {
    name: 'question-10',
    component: Question10,
    type: ScreenType.Question,
    preloadImages: [elonMuskImage, peterDruckerImage, warrenBuffettImage, tonyRobbinsImage, jackMaImage],
    image: questionImage10,
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];