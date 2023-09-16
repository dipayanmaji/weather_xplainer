import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = (props) => {
    const [location, setLocationDetails] = useState({});
    const [currentWeather, setCurrentWeatherDetails] = useState({});
    const [forecast, setForecastDetails] = useState({});
    const [unit, setCurrUnit] = useState("c");

    const setLocation = (obj) => {
        setLocationDetails(obj);
    }

    const setCurrentWeather = (obj) => {
        setCurrentWeatherDetails(obj);
    }

    const setForecast = (obj) => {
        setForecastDetails(obj);
    }

    const setUnit = (value) => {
        setCurrUnit(value);
    }

    const value = { location, setLocation, currentWeather, setCurrentWeather, forecast, setForecast, unit, setUnit };
    return (
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;