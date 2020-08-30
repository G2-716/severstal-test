import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question10Image1, question8Image1, questionImage8} from '../../../constants/images';

export const Question8 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('8')}
            image={question8Image1}
            {...props}
        />
    );
};