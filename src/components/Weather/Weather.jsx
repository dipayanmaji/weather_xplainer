import React, { useContext } from "react";
import './Weather.scss';
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { MyContext } from "../CustomContext";

const Weather = () => {
    const myContext = useContext(MyContext);
    const {currentWeather} = myContext;

    return (
        <div className="weather-container" style={{background: `${currentWeather.is_day == "1" ? "linear-gradient(rgb(36, 84, 148) 0%, rgb(28, 68, 132) 100%" : "linear-gradient(rgb(36, 77, 114) 0%, rgb(7, 33, 59) 100%"}`}}>
            <div className="weather">
                <CurrentWeather />
            </div>
        </div>
    )
}

export default Weather;