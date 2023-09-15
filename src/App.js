import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=kolkata&days=3&aqi=yes&alerts=yes')
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
