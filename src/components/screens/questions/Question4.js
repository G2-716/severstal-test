import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage4 } from '../../../constants/images';

export const Question4 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('4')}
            image={questionImage4}
            {...props}
        />
    );
};