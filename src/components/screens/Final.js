import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";

export const Final = props => {
    const { answers } = useContext(ProgressContext);
    return (
        <div>
            <h3>Final page</h3>
        </div>
    );
};