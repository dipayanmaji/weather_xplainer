import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
