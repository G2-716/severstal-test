import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question10 = (props) => {
    return <QuestionWrapper question={getQuestionById('10')} {...props} />;
};