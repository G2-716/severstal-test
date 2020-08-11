import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage5 } from '../../../constants/images';

export const Question5 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('5')}
            image={questionImage5}
            {...props}
        />
    );
};