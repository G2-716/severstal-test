import React from "react";



export const DesktopRightArrow = ( props ) => {
    const {  className, ...restProps } = props;
    return (
        <svg {...restProps} className={className} width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.6187 8.62715L15.1183 1.12697M24.6187 8.62715L0.0985766 8.62716M24.6187 8.62715L15.1183 16.627" stroke="white" stroke-width="2"/>
        </svg>
    )
}
