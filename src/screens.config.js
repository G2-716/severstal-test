import { Intro } from './components/screens/Intro';
import { Question1 } from './components/screens/questions/Question1';
import { Question2 } from './components/screens/questions/Question2';
import { Final } from './components/screens/Final';

const questionImage1 = process.env.PUBLIC_URL + '/static/images/question-image-1.png';

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
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
    image: questionImage1,
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];