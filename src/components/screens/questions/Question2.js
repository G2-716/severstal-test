import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage2 } from '../../../constants/images';

export const Question2 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('2')}
            image={questionImage2}
            {...props}
        />
    );
};