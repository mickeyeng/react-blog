import React from 'react';
import Navbar from './Components/navbar';
import GlobalStyle from './styles/global.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <h1>Simple blog!</h1>
    </>
  );
}

export default App;
