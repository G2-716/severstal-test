import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage3 } from '../../../constants/images';

export const Question3 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('3')}
            image={questionImage3}
            {...props}
        />
    );
};