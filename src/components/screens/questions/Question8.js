import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question8 = (props) => {
    return <QuestionWrapper question={getQuestionById('8')} {...props} />;
};