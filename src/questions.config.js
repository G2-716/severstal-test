export const AnswerType = {
    Sales: 'sales',
    Finance: 'finance',
    Engineering: 'engineering',
    ProjectOffice: 'projectOffice',
    Purchases: 'purchases',
};

export const questions = [
    {
        id: '1',
        text: 'Если у вас есть возможность стать чемпионом в одном виде спорта, какой вы бы выбрали?',
        answers: [
            {
                id: '1',
                text: 'Шахматы. Да-да, это спорт!',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Сноуборд/Лыжи',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Бокс',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Конный спорт',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Плавание',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '2',
        text: 'Second question?',
        answers: [
            {
                id: '1',
                text: 'Answer 1',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Answer 2',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Answer 3',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Answer 4',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Answer 5',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
];