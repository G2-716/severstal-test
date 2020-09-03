import { resolve } from "url";

export const SocialNetwork = {
    vk: 'vk',
    instagram: 'instagram',
    facebook: 'facebook',
};

export const getShareParams = (socialNetwork, result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareTitle = 'Лидер перемен - Северсталь';
    const shareDescription = '#северсталь #лидерперемен';
    const shareImage = resolve(url, result.shareImage[socialNetwork]);

    return {
        url,
        title: shareTitle,
        description: shareDescription,
        image: shareImage,
    };
};