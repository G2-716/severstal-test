import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import {question10Image1, question9Image1, questionImage9} from '../../../constants/images';

export const Question9 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('9')}
            image={question9Image1}
            {...props}
        />
    );
};