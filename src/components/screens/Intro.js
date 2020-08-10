import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";

export const Intro = props => {
    const { setNext } = useContext(ProgressContext);
    return (
        <div>
            <h3>Intro page</h3>
            <button onClick={setNext}>Next</button>
        </div>
    );
};