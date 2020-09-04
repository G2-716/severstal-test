import React from 'react';
import { ShareButton } from './ShareButton';
import { IgIcon } from '../../svg/SocialMediaIcons/IgIcon';

export const InstagramShareButton = ({ shareParams }) => {
    const { url, title, description, image } = shareParams;
    const queryParams = new URLSearchParams();
    queryParams.append('url', url);
    queryParams.append('title', title);
    queryParams.append('description', description);
    queryParams.append('image', image);

    return (
        <ShareButton href={`http://instagram.com/share.php?${shareParams.toString()}`}>
            <IgIcon />
        </ShareButton>
    );
};