import {
    elonMuskImage,
    jackMaImage,
    peterDruckerImage,
    tonyRobbinsImage,
    warrenBuffettImage
} from './constants/images';

export const AnswerType = {
    Sales: 'sales',
    Finance: 'finance',
    Engineering: 'engineering',
    ProjectOffice: 'projectOffice',
    Purchases: 'purchases',
};

export const answerTypes = {
    [AnswerType.Engineering]: {
        description: 'Ты прирожденный инженер! У тебя отличные технические навыки и ' +
            'системное видение процессов. Твое будущее – обогнать Илона Маска и ' +
            'стать лидером инноваций.',
        image: elonMuskImage,
    },
    [AnswerType.ProjectOffice]: {
        description: 'Ты инноватор и в тебе иногда просыпается внутренний предприниматель. ' +
            'Чутко улавливаешь тенденции изменений и мгновенно приспосабливаешься к ним, ' +
            'используя открывающиеся возможности. Слышал что-то о Питере Друкере? ' +
            'Что-то есть у вас общее ;)',
        image: peterDruckerImage,
    },
    [AnswerType.Finance]: {
        description: 'Хочешь, чтобы завтрак с тобой стоил $3,5 млн? Потому что нам кажется, ' +
            'ты идешь по стопам Уоррена Баффета.',
        image: warrenBuffettImage,
    },
    [AnswerType.Sales]: {
        description: 'Ты продашь даже детальку из своего детского лего! А твои эмоции ' +
            'всегда под контролем. Может ты русский Тони Роббинс?',
        image: tonyRobbinsImage,
    },
    [AnswerType.Purchases]: {
        description: 'Ты точно знаешь, сколько коробок пиццы съедят твои друзья на вечеринке ' +
            '(и сколько бутылок воды припасти на утро ;) ) Тебе не говорили, что ты похож на ' +
            'основателя Алибабы – Джека Ма?',
        image: jackMaImage,
    },
};