import React, { useLayoutEffect } from 'react';

export const useBodyBackgroundColor = (color) => {
    const body = document.body;

    useLayoutEffect(() => {
        body.style.backgroundColor = color;
    });
};