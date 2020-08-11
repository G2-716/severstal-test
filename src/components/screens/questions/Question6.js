import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage6 } from '../../../constants/images';

export const Question6 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('6')}
            image={questionImage6}
            {...props}
        />
    );
};