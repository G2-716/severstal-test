import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question10Image1, questionImage10} from '../../../constants/images';

export const Question10 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('10')}
            image={question10Image1}
            {...props}
        />
    );
};