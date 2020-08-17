import React from "react";

export const MobileRightArrow = ( props ) =>
{
    const { className, ...restProps } = props;
    return (
        <svg className={className} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect width="23" height="23" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0" transform="scale(0.00195312)"/>
                </pattern>
                <image id="image0" width="512" height="512" href="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}