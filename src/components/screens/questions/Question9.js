import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question9 = (props) => {
    return <QuestionWrapper question={getQuestionById('9')} {...props} />;
};