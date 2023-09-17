import React, { useContext } from "react";
import './Weather.scss';
import loader from '../../utilities/images/loading.gif';
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { MyContext } from "../CustomContext";
import Forecast from "../Forecast/Forecast";

const Weather = () => {
    const myContext = useContext(MyContext);
    const {loading, loadingText, currentWeather} = myContext;

    return (
        <div className="weather-container" style={{background: `${currentWeather.is_day == "1" ? "linear-gradient(rgb(36, 84, 148) 0%, rgb(28, 68, 132) 100%" : "linear-gradient(rgb(36, 77, 114) 0%, rgb(7, 33, 59) 100%"}`}}>
            {
                loadingText ? <ul className="loader-text">
                    <li>Turn on device location.</li>
                    <li>Allow location permission from your browser site settings.</li>
                    <li>Reload the site.</li>
                    <li>Or search manually from above search box.</li>
                </ul> 
                :
                loading ? <img className="loader" src={loader} alt="Loading..." title="api call going on" />
                : 
                <div className="weather">
                <CurrentWeather />
                <Forecast />
            </div>}
        </div>
    )
}

export default Weather;