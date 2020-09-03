import React, { useEffect } from 'react';
import { ShareButton } from './ShareButton';
import { FbIcon } from '../../svg/SocialMediaIcons/FbIcon';

export const FacebookShareButton = ({ shareParams }) => {
    const { url, title, description, image } = shareParams;
    const queryParams = new URLSearchParams();
    queryParams.append('u', url);

    useEffect(() => {
        const head = document.head;
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.setAttribute('content', image);
        head.appendChild(meta);
    });

    return (
        <ShareButton href={`https://www.facebook.com/sharer/sharer.php?${queryParams.toString()}`}>
            <FbIcon />
        </ShareButton>
    );
};