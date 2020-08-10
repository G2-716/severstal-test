import { useCallback, useContext, useEffect } from "react";
import { ProgressContext } from "../contexts/ProgressContext";
import { questions } from "../questions.config";
import { getAnswerById } from "../utils/getAnswerById";

// DRAFT

export const useQuestion = (question) => {
    const progress = useContext(ProgressContext);
    const { answers, setAnswer, setIsLocked } = progress;

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;

    const selectedAnswerId = answers[question.id];
    const selectedAnswer = getAnswerById(question.id, selectedAnswerId);

    useEffect(() => {
        if (!answers[question.id]) setIsLocked(true);
        return () => setIsLocked(false);
    }, []);

    const onSelect = useCallback((answerId) => {
        setIsLocked(false);
        setAnswer(question.id, answerId);
    }, [question, setAnswer, setIsLocked]);

    return {
        ...progress,
        questionNumber,
        questionsCount,
        selectedAnswer,
        onSelect,
    };
};