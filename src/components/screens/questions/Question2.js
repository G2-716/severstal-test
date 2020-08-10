import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question2 = () => {
    return <QuestionWrapper question={getQuestionById('2')} />;
};