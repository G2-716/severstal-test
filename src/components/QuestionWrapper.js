import React, { useEffect, useContext, useCallback } from 'react';
import { questions } from '../questions.config';
import { ProgressContext } from '../contexts/ProgressContext';

export const QuestionWrapper = props => {
    const { question, renderLeftSide, renderRightSide } = props;
    const { answers, setAnswer, setPrev, setNext, isLocked, setIsLocked } = useContext(ProgressContext);

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;

    useEffect(() => {
        if (!answers[question.id]) setIsLocked(true);
        return () => setIsLocked(false);
    }, []);

    const handleAnswerChange = useCallback((answerId) => {
        setIsLocked(false);
        setAnswer(question.id, answerId);
    }, [question, setAnswer, setIsLocked]);

    return (
        <div>
            <h1>Intro page</h1>
            <div>{questionNumber}/{questionsCount}</div>
            <h3>{question.text}</h3>
            {question.answers.map(answer => (
                <label key={answer.id}>
                    <input
                        type='radio'
                        name={question.id}
                        value={answer.id}
                        checked={answers[question.id] === answer.id}
                        onChange={() => handleAnswerChange(answer.id)}
                    />
                    {answer.text}
                </label>
            ))}
            <div style={{ width: 300, height: 300, backgroundColor: 'red' }}></div>
            <button onClick={setPrev}>Prev</button>
            <button disabled={isLocked} onClick={setNext}>Next</button>
        </div>
    );
};