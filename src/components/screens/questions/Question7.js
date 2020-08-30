import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question10Image1, questionImage7} from '../../../constants/images';

export const Question7 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('7')}
            image={question10Image1}
            {...props}
        />
    );
};