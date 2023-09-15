import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './utilities/images/logo.png';

function App() {
  const [localWeatherDetails, setLocalWeatherDetails] = useState({});

  const position = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = position.coords.latitude + "," + position.coords.longitude;
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=${location}&days=3&aqi=yes&alerts=yes`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setLocalWeatherDetails(result);
        })
        .catch(err => console.log(err))
    }, err => console.log(err)
    )
  }

  useEffect(() => {
    // fetch('https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=kolkata&days=3&aqi=yes&alerts=yes')
    //   .then((res) => res.json())
    //   .then((result) => console.log(result))
    //   .catch(err => console.log(err))

    position();
  }, [])

  return (
    <div className="App">
      <img src={logo} alt='Weather Xplaner' style={{width: "15rem", margin: "2rem"}} />

      <h1>
        {Object.keys(localWeatherDetails).length > 0 ? localWeatherDetails.location.name : "Allow Location"}
      </h1>
    </div>
  );
}

export default App;
