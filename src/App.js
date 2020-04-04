import React from 'react';
import Navbar from './Components/navbar';
import GlobalStyle from './styles/global.js';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 20vw auto 20vw;
  gap: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <h1>Simple blog!</h1>
      </Container>
    </>
  );
}

export default App;
