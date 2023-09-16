import React, { useContext, useRef, useState } from "react";
import './DayForecast.scss';
import { getDate } from "../../utilities/convertToDate";
import { MyContext } from "../CustomContext";

const DayForecast = ({ details, index, forecastDaysScroll }) => {
    const myContext = useContext(MyContext);
    const { unit, selectedForecastDateIndex, setSelectedForecastDateIndex } = myContext;

    const forecastDayRef = useRef(null);

    const { date, day } = details;
    let { day: forecastDay, date: forecastDate } = getDate(date);

    const forecastDateHandler = () =>{
        let extraScroll = selectedForecastDateIndex >= index ? 0 : 160;
        forecastDaysScroll(forecastDayRef.current.offsetLeft, extraScroll);
        setSelectedForecastDateIndex(index);
    }

    return (
        <div className={`day-forecast ${selectedForecastDateIndex === index && "selected-day"}`} ref={forecastDayRef} onClick={forecastDateHandler}>
            <div className="heading">{index === 0 ? "Today" : `${forecastDay} ${forecastDate}`}</div>
            <div className="details">
                <div className="temp-details">
                    <img src={day.condition.icon} title={day.condition.text} />
                    <div className="temp">
                        <span className="max" title="Maximam tempreture">{unit === "c" ? day.maxtemp_c : day.maxtemp_f}°</span>
                        <span className="min" title="Minimum tempreture">{unit === "c" ? day.mintemp_c : day.mintemp_f}°</span>
                    </div>
                </div>

                <div className="condition-details">
                    <span className="text" title="Condition">{day.condition.text}</span>
                    <span className="humidity" title="Humidity">
                        <i className="fa-solid fa-droplet"></i>&nbsp;
                        {day.avghumidity}%
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DayForecast;