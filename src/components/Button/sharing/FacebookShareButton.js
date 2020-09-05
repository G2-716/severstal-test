import React, { useEffect } from 'react';
import { ShareButton } from './ShareButton';
import { FbIcon } from '../../svg/SocialMediaIcons/FbIcon';
import { createOpenGraphMeta } from '../../../utils/createOpenGraphMeta';

export const FacebookShareButton = ({ shareParams }) => {
    const { url, title, description, image } = shareParams;
    const queryParams = new URLSearchParams();
    queryParams.append('u', url);

    const ogMetas = [
        ['title', title],
        ['description', description],
        ['type', 'website'],
        ['url', url],
        ['image', image],
    ];

    useEffect(() => {
        const head = document.head;
        const fragment = document.createDocumentFragment();
        const metaElements = ogMetas.map(meta => fragment.appendChild(createOpenGraphMeta(...meta)));
        head.appendChild(fragment);

        return () => metaElements.forEach(meta => head.removeChild(meta));
    });

    return (
        <ShareButton href={`https://www.facebook.com/sharer/sharer.php?${queryParams.toString()}`}>
            <FbIcon />
        </ShareButton>
    );
};