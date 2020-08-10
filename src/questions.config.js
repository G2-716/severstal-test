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
        text: 'Представь, что в 5 утра тебе звонит староста/ ментор/ руководитель. Как думаешь, что случилось?',
        answers: [
            {
                id: '1',
                text: 'Он понял, как решить задачу с прошлой пары/по работе, с которой никто не ' +
                    'справился, теперь звонит всем, рассказывает',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Не может уснуть, хочет с тобой поговорить',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Какая разница, что случилось?! Я хочу спать!',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Точно случилось что-то чрезвычайно важное, иначе бы не набирал.',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Меня точно выгнали из университета/с работы!',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '3',
        text: 'Ты пришел в офис, а там весь день пожарные учения. Что будешь делать?',
        answers: [
            {
                id: '1',
                text: 'А что, работать надо обязательно в офисе?',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Пойду с коллегами гулять',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Давно хотел сходить на выставку недалеко от работы',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Досмотрю свой сон дома',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Пойду есть в соседнем кафе',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '4',
        text: 'Что тебе больше нравится?',
        answers: [
            {
                id: '1',
                text: 'Отслеживать техническую сторону проекта',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Разрабатывать новые идеи',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Заниматься всем и сразу',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Управлять, координировать людей',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Помогать другим',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '5',
        text: 'В коллективе появился новый человек. Ты:',
        answers: [
            {
                id: '1',
                text: 'Я работаю',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Приду с пряниками знакомиться',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Напишу в общем чатике «Вэлкам»',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Приглашу в бар в пятницу посидеть с коллегами',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Пересечемся по проекту – будем общаться. Нет – значит не судьба',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '6',
        text: 'Уже 6й вопрос. Надо подкрепиться. Что выберешь?',
        answers: [
            {
                id: '1',
                text: 'Пицца',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Запеченная рыба',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Бургер',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Японская кухня',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Домашняя еда',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '7',
        text: 'Надеюсь, тебе было вкусно, у нас тут следующий вопрос. Если офис, то:',
        answers: [
            {
                id: '1',
                text: 'Многоэтажное здание в центре города',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Просторный лофт рядом с парком',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Удалёнка, чтобы можно было работать из кроватки или кафе',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Что угодно, главное в другой стране',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Необычный, современный, концептуальный',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '8',
        text: 'Переезжаешь, а из техники можно перевезти только 1 вещь. Что возьмешь?',
        answers: [
            {
                id: '1',
                text: 'Телевизор',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Холодильник',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Кофемашина',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Микроволновка',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Стиральная машина',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '9',
        text: 'В спорах ты обычно:',
        answers: [
            {
                id: '1',
                text: 'Пытаюсь быстрее закончить разговор, всё равно останусь при своём мнении',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Могу склонить людей на свою точку зрения',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Привожу доказательства своей точки зрениями графиками, цифрами и гуглом',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Я почти никогда ни с кем не ссорюсь',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Готов принять другую точку зрения, если меня убедят',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
    {
        id: '10',
        text: 'Есть время почитать. Что возьмешь с полки?',
        answers: [
            {
                id: '1',
                text: 'Возьму энциклопедию по устройству механизмов, приборов, машин',
                pointsTo: [AnswerType.Sales],
            },
            {
                id: '2',
                text: 'Книжка по психологии явно ждёт меня',
                pointsTo: [AnswerType.Finance],
            },
            {
                id: '3',
                text: 'Мой утренний New York Times принесли?',
                pointsTo: [AnswerType.Engineering],
            },
            {
                id: '4',
                text: 'Охотно читаю научно-популярную, критическую литературу, публицистику',
                pointsTo: [AnswerType.ProjectOffice],
            },
            {
                id: '5',
                text: 'Вон ту, с самой красивой обложкой!',
                pointsTo: [AnswerType.Purchases],
            },
        ],
    },
];