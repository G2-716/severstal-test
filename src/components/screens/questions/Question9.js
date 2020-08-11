import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage9 } from '../../../constants/images';

export const Question9 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('9')}
            image={questionImage9}
            {...props}
        />
    );
};