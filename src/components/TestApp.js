import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  color: #000;
  background-color: burlywood;
`;

function App() {
  return (
      <Wrapper>
        {Array(1).fill(1).map((_, i) => <div>Test {i}</div>)}
      </Wrapper>
  );
}

export default App;
