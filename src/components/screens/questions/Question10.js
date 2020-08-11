import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { questionImage10 } from '../../../constants/images';

export const Question10 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('10')}
            image={questionImage10}
            {...props}
        />
    );
};