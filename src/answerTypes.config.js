import {
    elonMuskFacebookShareImage,
    elonMuskImage,
    elonMuskInstagramVKShareImage,
    jackMaFacebookShareImage,
    jackMaImage,
    jackMaInstagramVKShareImage,
    peterDruckerFacebookShareImage,
    peterDruckerImage,
    peterDruckerInstagramVKShareImage,
    tonyRobbinsFacebookShareImage,
    tonyRobbinsImage,
    tonyRobbinsInstagramVKShareImage,
    warrenBuffettFacebookShareImage,
    warrenBuffettImage,
    warrenBuffettInstagramVKShareImage,
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
        type: AnswerType.Engineering,
        description: 'Ты прирожденный инженер! У тебя отличные технические навыки и ' +
            'системное видение процессов. Твое будущее – обогнать Илона Маска и ' +
            'стать лидером инноваций.',
        image: elonMuskImage,
        shareImage: {
            vk: elonMuskInstagramVKShareImage,
            instagram: elonMuskInstagramVKShareImage,
            facebook: elonMuskFacebookShareImage,
        },
        precedenceOver: [AnswerType.ProjectOffice, AnswerType.Purchases],
    },
    [AnswerType.ProjectOffice]: {
        type: AnswerType.ProjectOffice,
        description: 'Ты инноватор и в тебе иногда просыпается внутренний предприниматель. ' +
            'Чутко улавливаешь тенденции изменений и мгновенно приспосабливаешься к ним, ' +
            'используя открывающиеся возможности. Слышал что-то о Питере Друкере? ' +
            'Что-то есть у вас общее ;)',
        image: peterDruckerImage,
        shareImage: {
            vk: peterDruckerInstagramVKShareImage,
            instagram: peterDruckerInstagramVKShareImage,
            facebook: peterDruckerFacebookShareImage,
        },
        precedenceOver: [AnswerType.Finance, AnswerType.Sales],
    },
    [AnswerType.Finance]: {
        type: AnswerType.Finance,
        description: 'Хочешь, чтобы завтрак с тобой стоил $3,5 млн? Потому что нам кажется, ' +
            'ты идешь по стопам Уоррена Баффета.',
        image: warrenBuffettImage,
        shareImage: {
            vk: warrenBuffettInstagramVKShareImage,
            instagram: warrenBuffettInstagramVKShareImage,
            facebook: warrenBuffettFacebookShareImage,
        },
        precedenceOver: [AnswerType.Sales, AnswerType.Engineering],
    },
    [AnswerType.Sales]: {
        type: AnswerType.Sales,
        description: 'Ты продашь даже детальку из своего детского лего! А твои эмоции ' +
            'всегда под контролем. Может ты русский Тони Роббинс?',
        image: tonyRobbinsImage,
        shareImage: {
            vk: tonyRobbinsInstagramVKShareImage,
            instagram: tonyRobbinsInstagramVKShareImage,
            facebook: tonyRobbinsFacebookShareImage,
        },
        precedenceOver: [AnswerType.Engineering, AnswerType.Purchases],
    },
    [AnswerType.Purchases]: {
        type: AnswerType.Purchases,
        description: 'Ты точно знаешь, сколько коробок пиццы съедят твои друзья на вечеринке ' +
            '(и сколько бутылок воды припасти на утро ;) ) Тебе не говорили, что ты похож на ' +
            'основателя Алибабы – Джека Ма?',
        image: jackMaImage,
        shareImage: {
            vk: jackMaInstagramVKShareImage,
            instagram: jackMaInstagramVKShareImage,
            facebook: jackMaFacebookShareImage,
        },
        precedenceOver: [AnswerType.Finance, AnswerType.ProjectOffice],
    },
};