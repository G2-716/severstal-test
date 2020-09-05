import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ProgressContext } from '../../contexts/ProgressContext';
import { Loader } from '../Loader';

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #000000;
`;

const NEXT_DELAY = 1000;

export const Loading = (props) => {
    const { setNext } = useContext(ProgressContext);

    useEffect(() => {
        setTimeout(setNext, NEXT_DELAY);
    });

    return (
        <LoaderStyled>
            <Loader />
        </LoaderStyled>
    );
};