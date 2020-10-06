import React, { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';
import { getAnswerById } from '../utils/getAnswerById';
import { AnswerType, answerTypes } from '../answerTypes.config';
import { findAllMaxBy } from '../utils/findAllMaxBy';

const DEFAULT_RESULT = AnswerType.Sales;

export const useResult = () => {
    const { answers } = useContext(ProgressContext);

    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId) return res;
        const { type } = getAnswerById(questionId, answerId);
        return { ...res, [type]: (res[type] || 0) + 1 };
    }, {});

    const resultTypesWithMaxPoints = findAllMaxBy(Object.keys(resultPoints), (resultType => resultPoints[resultType]));
    const resultType = resultTypesWithMaxPoints.find(resultType => {
        const restResultTypes = resultTypesWithMaxPoints.filter(current => current !== resultType);
        return restResultTypes.every(current => !!~answerTypes[resultType].precedenceOver.indexOf(current));
    });

    return answerTypes[resultType || DEFAULT_RESULT];
};