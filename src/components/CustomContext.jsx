import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = (props) => {
    const [loading, setLoadingValue] = useState(true);
    const [loadingText, setLoadingTextValue] = useState(false);
    const [location, setLocationDetails] = useState({});
    const [currentWeather, setCurrentWeatherDetails] = useState({});
    const [forecast, setForecastDetails] = useState({});
    const [unit, setCurrUnit] = useState("c");
    const [selectedForecastDateIndex, setSelectedForecastDate] = useState(0);

    const setLoading = (value) => {
        setLoadingValue(value);
    }

    const setLoadingText = (value) => {
        setLoadingTextValue(value);
    }

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

    const setSelectedForecastDateIndex = (index)=>{
        setSelectedForecastDate(index);
    }

    const value = { loading, setLoading, loadingText, setLoadingText, location, setLocation, currentWeather, setCurrentWeather, forecast, setForecast, unit, setUnit, selectedForecastDateIndex, setSelectedForecastDateIndex };
    return (
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;