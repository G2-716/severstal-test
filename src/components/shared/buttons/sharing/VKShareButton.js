import React from 'react';
import { VkIcon } from '../../svg/socialMediaIcons/VkIcon';
import { ShareButton } from './ShareButton';

export const VKShareButton = ({ shareParams, className, width, height }) => {
    const { url, title, description, image } = shareParams;
    const queryParams = new URLSearchParams();
    queryParams.append('url', url);
    queryParams.append('title', title);
    queryParams.append('description', description);
    queryParams.append('image', image);

    return (
        <ShareButton
            className={className}
            href={`http://vk.com/share.php?${queryParams.toString()}`}
        >
            <VkIcon width={width} height={height} />
        </ShareButton>
    );
};