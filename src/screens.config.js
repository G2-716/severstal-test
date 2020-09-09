import { Intro } from './components/screens/Intro/Intro';
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
import { Final } from './components/screens/Final/Final';
import { Loading } from './components/screens/Loading';

import {
  question1Image1,
  question1Image2,
  question1gif,
  question2Image1,
  question2Image2,
  question2gif,
  question3Image1,
  question3Image2,
  question3gif,
  question4Image1,
  question4Image2,
  question5Image1,
  question5Image2,
  question5gif,
  question6Image1,
  question6Image2,
  question6gif,
  question7Image1,
  question7Image2,
  question8Image1,
  question8Image2,
  question9Image1,
  question9Image2,
  question9gif,
  question10Image1,
  question10Image2,
  question10gif,
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
  Loading: 'loading',
};

export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
    preloadImages: [question1Image1, question1Image2,question1gif],
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
    preloadImages: [question2Image1,question2Image2,question2gif],
    image: [question1Image1,question1Image2,question1gif]
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
    preloadImages: [question3Image1,question3Image2,question3gif],
    image: [question2Image1,question2Image1,question2gif]
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
    preloadImages: [question4Image1,question4Image2],
    image: [question3Image1,question3Image2,question3gif]
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
    preloadImages: [question5Image1,question5Image2,question5gif],
    image: [question4Image1,question4Image2],
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
    preloadImages: [question6Image1,question6Image2, question6gif],
    image: [question5Image1,question5Image2,question5gif],
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
    preloadImages: [question7Image1,question7Image2],
    image: [question6Image1,question6Image2,question6gif],
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
    preloadImages: [question8Image1,question8Image2],
    image: [question7Image1,question7Image2],
  },
  {
    name: 'question-8',
    component: Question8,
    type: ScreenType.Question,
    preloadImages: [question9Image1,question9Image2, question9gif],
    image: [question8Image1,question8Image2],
  },
  {
    name: 'question-9',
    component: Question9,
    type: ScreenType.Question,
    preloadImages: [question10Image1,question10Image2,question10gif],
    image: [question9Image1,question9Image2, question9gif],
  },
  {
    name: 'question-10',
    component: Question10,
    type: ScreenType.Question,
    preloadImages: [elonMuskImage, peterDruckerImage, warrenBuffettImage, tonyRobbinsImage, jackMaImage],
    image: [question10Image1,question10Image2, question10gif],
  },
  {
    name: 'loading',
    component: Loading,
    type: ScreenType.Loading,
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];