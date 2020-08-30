import React from 'react';
import styled from 'styled-components';

export const Spacer = styled.div`
  flex-grow: ${({ value }) => value || 1};
`;