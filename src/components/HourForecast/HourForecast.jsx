import React, { useContext, useRef } from "react";
import './HourForecast.scss';
import { MyContext } from "../CustomContext";
import { getDate } from "../../utilities/convertToDate";

const HourForecast = ({ details, forecastHoursScroll }) => {
    const myContext = useContext(MyContext);
    const { unit } = myContext;
    const { hours, meridiem } = getDate(details.time);

    const forecastHourRef = useRef(null);

    const forecastHourHandler = () =>{
        forecastHoursScroll(forecastHourRef.current.offsetLeft);
    }

    return (
        <div className="hour-forecast-container" ref={forecastHourRef} onClick={forecastHourHandler}>
            <div className="hour-forecast">
                <img src={details.condition.icon} title={details.condition.text} />
                <div className="temp-condition">
                    <span className="temp">{unit === "c" ? details.temp_c : details.temp_f}°</span>
                    <span className="condition" title="Condition">{details.condition.text}</span>
                </div>
                <div className="humidity-wind">
                    <span className="humidity" title="Humidity">
                        <i className="fa-solid fa-droplet"></i>&nbsp;
                        {details.humidity}%
                    </span>
                    <span className="wind">{unit === "c" ? details.wind_kph + " k/h" : details.wind_mph + "  m/h"}&nbsp;
                        <span className="wind-direction" title="Wind Direction" style={{ rotate: `-${details.wind_degree}deg` }}><svg width="14" height="14" viewBox="0 0 10 14" style={{ rotate: "90deg" }}><path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z" fill="white"></path></svg></span>
                    </span>
                </div>
            </div>

            <span className="time">{hours} {meridiem}</span>
        </div>
    )
}

export default HourForecast;