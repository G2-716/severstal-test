import React from 'react';
import { ShareButton } from './ShareButton';
import { FbIcon } from '../../svg/socialMediaIcons/FbIcon';

export const FacebookShareButton = ({ shareParams, className, width, height }) => {
    const { url } = shareParams;
    const queryParams = new URLSearchParams();
    queryParams.append('u', url);

    return (
        <ShareButton
            className={className}
            href={`https://www.facebook.com/sharer/sharer.php?${queryParams.toString()}`}
        >
            <FbIcon width={width} height={height} />
        </ShareButton>
    );
};