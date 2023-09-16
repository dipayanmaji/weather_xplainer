import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import logo from './utilities/images/logo.png';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import { MyContext } from './components/CustomContext';

function App() {

  return (
    <div className="App">
      <Header />
      <Weather />

      {/* <img src={logo} alt='Weather Xplaner' style={{width: "15rem", margin: "2rem"}} /> */}

      {/* <h1>
        {Object.keys(localWeatherDetails).length > 0 ? localWeatherDetails.location.name : "Allow Location"}
      </h1> */}
    </div>
  );
}

export default App;
