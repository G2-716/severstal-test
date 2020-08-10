import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question3 = (props) => {
    return <QuestionWrapper question={getQuestionById('3')} {...props} />;
};