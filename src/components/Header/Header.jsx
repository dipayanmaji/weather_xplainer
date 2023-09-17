import React, { useContext, useEffect } from "react";
import './Header.scss';
import logo from '../../utilities/images/logo.png';
import { MyContext } from "../CustomContext";
import axios from "axios";

const Header = () => {
    const myContext = useContext(MyContext);
    const { setLoading, setLocation, setCurrentWeather, setForecast, setSelectedForecastDateIndex } = myContext;

    const apiCall = async (location) => {
        try {
            setLoading(true);
            let result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=${location}&days=10&aqi=yes&alerts=yes`);
            console.log(result.data);
            setLocation(result.data.location);
            setCurrentWeather(result.data.current);
            setForecast(result.data.forecast);
            setSelectedForecastDateIndex(0);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
            setLoading(false);
            alert("Enter a valid location")
        }
    }

    const localWeatherReport = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let location = position.coords.latitude + "," + position.coords.longitude;
            apiCall(location);
        }, err => {
            alert("First turn on your device location.");
            window.location.reload();
            console.log(err);
        })
    }

    const locationHandler = (e) => {
        e.preventDefault();
        const locationName = e.target.location.value;
        if (!locationName) {
            alert("Enter a valid location")
            return;
        }

        apiCall(locationName);
        e.target.location.value = "";
    }

    useEffect(() => {
        localWeatherReport();
    }, [])

    return (
        <div className="header-container">
            <div className="header">
                <img className="logo" src={logo} alt="Weather Xplainer" onClick={() => window.location.reload()} />
                <form onSubmit={locationHandler}>
                    <input type="text" name="location" id="location-search" placeholder="Search For Location" autoComplete="off" />
                    <button className="search-btn"><i className="fa-solid fa-magnifying-glass-location"></i></button>

                    <div className="hint">Search by city/state/country name for better results.</div>
                </form>
            </div>
        </div>
    )
}

export default Header;