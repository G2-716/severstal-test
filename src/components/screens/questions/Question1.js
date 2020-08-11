import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage1 } from '../../../constants/images';

export const Question1 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('1')}
            image={questionImage1}
            {...props}
        />
    );
};