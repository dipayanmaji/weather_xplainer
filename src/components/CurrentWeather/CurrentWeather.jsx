import React, { useContext } from "react";
import './CurrentWeather.scss';
import { MyContext } from "../CustomContext";
import { getDate } from '../../utilities/convertToDate';

const CurrentWeather = () => {
    const myContext = useContext(MyContext);
    const { location, currentWeather, unit, setUnit } = myContext;
    const { hours, minutes, meridiem, day, date } = getDate(location.localtime);

    const unitHandler = () => {
        setUnit(unit == "c" ? "f" : "c");
    }

    return (
        <div className="current-weather">
            <section className="top-section">
                <div className="location-name">
                    <div className="heading">Current weather</div>
                    <div className="name">
                        {location.name && (location.name + ",")}&nbsp;
                        {location.region && (location.region + ",")}&nbsp;
                        {location.country}
                    </div>
                </div>

                <div className="location-time">
                    <div className="heading">Time</div>
                    <div className="time">{hours}:{minutes} {meridiem}</div>
                </div>
            </section>

            <section className="middle-section">
                <div className="temp-condition">
                    <img src={currentWeather.condition?.icon} title={currentWeather.condition?.text} />
                    <div className="tempreture" title="Tempreture">{unit == "c" ? currentWeather.temp_c : currentWeather.temp_f}
                        <span className="unit-flip">
                            <span className="unit">°{unit == "c" ? "C" : "F"}</span>
                            <i className="fa-solid fa-repeat" title="Change unit" onClick={unitHandler}></i>
                        </span>
                    </div>
                </div>

                <div className="text-condition">
                    <div className="text" title="Condition">{currentWeather.condition?.text}</div>
                    <div className="feels-like">Feels like <span className="value">{unit == "c" ? currentWeather.feelslike_c : currentWeather.feelslike_f}°</span></div>
                </div>
            </section>

            <section className="bottom-section">
                <div className="other-condition">
                    <span className="name">Cloud</span>
                    <span className="value">{currentWeather.cloud}%</span>
                </div>

                <div className="other-condition">
                    <span className="name">Wind</span>
                    <span className="value">{unit == "c" ? currentWeather.wind_kph + " km/h" : currentWeather.wind_mph + " m/h"} &nbsp;
                        <span className="wind-direction" title="Wind Direction" style={{ rotate: `-${currentWeather.wind_degree}deg` }}><svg width="14" height="14" viewBox="0 0 10 14" style={{ rotate: "90deg" }}><path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z" fill="white"></path></svg></span>
                    </span>
                </div>

                <div className="other-condition">
                    <span className="name">Humidity</span>
                    <span className="value">{currentWeather.humidity}%</span>
                </div>

                <div className="other-condition">
                    <span className="name">Visibility</span>
                    <span className="value">{unit == "c" ? currentWeather.vis_km + " km" : currentWeather.vis_miles + " miles"}</span>
                </div>

                <div className="other-condition">
                    <span className="name">Pressure</span>
                    <span className="value">{unit == "c" ? currentWeather.pressure_mb + " mb" : currentWeather.pressure_in + " in"}</span>
                </div>

                <div className="other-condition">
                    <span className="name">Gust</span>
                    <span className="value">{unit == "c" ? currentWeather.gust_kph + " km/h" : currentWeather.gust_mph + " m/h"}</span>
                </div>

            </section>
        </div>
    )
}

export default CurrentWeather;