import React from "react";

export const LeftArrowIcon = (props ) =>
{
    const { className, width = 23, height = 23, fill = '#ffffff', ...restProps } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <g>
                <path
                    fill={fill}
                    d="M13.312 15.3163C13.5652 15.5679 13.387 16 13.03 16H8.46239C8.19825 16 7.94484 15.8955 7.75749 15.7093L0.713739 8.70931C0.320273 8.31828 0.320273 7.68172 0.713739 7.29069L7.75749 0.290694C7.94484 0.104504 8.19825 0 8.46239 0H13.03C13.387 0 13.5652 0.432099 13.312 0.683722L5.95 8L13.312 15.3163Z"
                />
            </g>
        </svg>
    )
}