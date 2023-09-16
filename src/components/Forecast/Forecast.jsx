import React, { useContext, useRef, useState } from "react";
import './Forecast.scss';
import DayForecast from "../DayForecast/DayForecast";
import HourForecast from "../HourForecast/HourForecast";
import { MyContext } from "../CustomContext";

const Forecast = () => {
    const myContext = useContext(MyContext);
    const { forecast, selectedForecastDateIndex } = myContext;

    const forecastDaysRef = useRef(null);
    const forecastHoursRef = useRef(null);

    const forecastDaysScroll = (scrollX, extraScroll) => {
        forecastDaysRef.current.scroll(scrollX - forecastDaysRef.current.offsetLeft - extraScroll, 0);
        // extraScroll is 160px = 10rem (after click on the forecast day container it's width will be increase by 10rem) when we click the bigger day from the selected day, and 0px when vise versa

        forecastHoursRef.current.scroll(0, 0);
    }

    const forecastHoursScroll = (scrollX) => {
        forecastHoursRef.current.scroll(scrollX - forecastHoursRef.current.offsetLeft, 0);
    }

    return (
        <div className="forecast">
            <p className="heading">10 DAYS FORECAST</p>

            <div ref={forecastDaysRef} className="forecast-days">
                {
                    forecast.forecastday?.map((details, index) => {
                        return <DayForecast key={index} details={details} index={index} forecastDaysScroll={forecastDaysScroll} />
                    })
                }
            </div>

            <div ref={forecastHoursRef} className="forecast-hours">
                {
                    forecast.forecastday[selectedForecastDateIndex]?.hour?.map((details, index)=>{
                       return <HourForecast key={index} details={details} forecastHoursScroll={forecastHoursScroll} />
                    })
                }
            </div>
        </div>
    )
}

export default Forecast;
