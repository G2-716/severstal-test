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

const questionImage1 = process.env.PUBLIC_URL + '/static/images/question-image-1.png';
const questionImage2 = process.env.PUBLIC_URL + '/static/images/question-image-2.png';
const questionImage3 = process.env.PUBLIC_URL + '/static/images/question-image-3.png';
const questionImage4 = process.env.PUBLIC_URL + '/static/images/question-image-4.png';
const questionImage5 = process.env.PUBLIC_URL + '/static/images/question-image-5.png';
const questionImage6 = process.env.PUBLIC_URL + '/static/images/question-image-6.png';
const questionImage7 = process.env.PUBLIC_URL + '/static/images/question-image-7.png';
const questionImage8 = process.env.PUBLIC_URL + '/static/images/question-image-8.png';
const questionImage9 = process.env.PUBLIC_URL + '/static/images/question-image-9.png';
const questionImage10 = process.env.PUBLIC_URL + '/static/images/question-image-10.png';

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
    image: questionImage2,
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
    image: questionImage3,
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
    image: questionImage4,
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
    image: questionImage5,
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
    image: questionImage6,
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
    image: questionImage7,
  },
  {
    name: 'question-8',
    component: Question8,
    type: ScreenType.Question,
    image: questionImage8,
  },
  {
    name: 'question-9',
    component: Question9,
    type: ScreenType.Question,
    image: questionImage9,
  },
  {
    name: 'question-10',
    component: Question10,
    type: ScreenType.Question,
    image: questionImage10,
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];