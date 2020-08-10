import React, { useState, useContext } from 'react';

export const Button = props => {
    return (
        <div onClick={props.onClick}>
            {props.children}
        </div>
    )
}