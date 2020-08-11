import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage8 } from '../../../constants/images';

export const Question8 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('8')}
            image={questionImage8}
            {...props}
        />
    );
};