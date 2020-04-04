import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GlobalStyle from './styles/global.js';
import MainSection from './Components/MainSection';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
