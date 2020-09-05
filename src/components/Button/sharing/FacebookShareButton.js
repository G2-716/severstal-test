import React from 'react';
import { ShareButton } from './ShareButton';
import { FbIcon } from '../../svg/SocialMediaIcons/FbIcon';

export const FacebookShareButton = ({ shareParams }) => {
    const { url } = shareParams;
    const queryParams = new URLSearchParams();
    queryParams.append('u', url);

    return (
        <ShareButton href={`https://www.facebook.com/sharer/sharer.php?${queryParams.toString()}`}>
            <FbIcon />
        </ShareButton>
    );
};