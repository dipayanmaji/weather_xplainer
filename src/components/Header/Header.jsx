import React, { useContext, useEffect, useRef } from "react";
import './Header.scss';
import logo from '../../utilities/images/logo.png';
import { MyContext } from "../CustomContext";
import axios from "axios";

const Header = () => {
    const myContext = useContext(MyContext);
    const { setLoading, setLoadingText, setLocation, setCurrentWeather, setForecast, setSelectedForecastDateIndex, currentWeather } = myContext;

    const inputRef = useRef(null);

    const apiCall = async (location) => {
        try {
            setLoading(true);
            setLoadingText(false);
            let result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=${location}&days=10&aqi=yes&alerts=yes`);
            console.log(result.data);
            setLocation(result.data.location);
            setCurrentWeather(result.data.current);
            setForecast(result.data.forecast);
            setSelectedForecastDateIndex(0);
            setLoading(false);
            // setLoadingText(false);
        }
        catch (err) {
            console.log(err);
            setLoading(false);
            if (!Object.keys(currentWeather).length)
                setLoadingText(true);
            alert("Enter a valid location")
        }
    }


    const localWeatherReport = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let location = position.coords.latitude + "," + position.coords.longitude;
            apiCall(location);
            localStorage.setItem("old_user", "true");
        }, err => {
            setLoadingText(true);
            console.log(err);
            
            if(err.code === 2){
                alert("Check your internet connection.");
                return;
            }
            if (localStorage.getItem("old_user")) {
                alert("Turn on location, and allow the location permission from your browser settings. Then reload.");
            }
            else {
                alert("Turn on location manually from your device settings, and reload.");
                localStorage.setItem("old_user", "true");
                // window.location.reload();
            }
        })
    }

    const locationHandler = (e) => {
        e.preventDefault();
        const locationName = inputRef.current.value;
        if (!locationName) {
            alert("Enter a valid location")
            return;
        }

        apiCall(locationName);
        inputRef.current.value = "";
        inputRef.current.blur();
    }

    useEffect(() => {
        localWeatherReport();
    }, [])

    return (
        <div className="header-container">
            <div className="header">
                <img className="logo" src={logo} alt="Weather Xplainer" onClick={() => window.location.reload()} />
                <form onSubmit={locationHandler}>
                    <input ref={inputRef} type="text" name="location" id="location-search" placeholder="Search For Location" autoComplete="off" />
                    <button className="search-btn"><i className="fa-solid fa-magnifying-glass-location"></i></button>

                    <div className="hint">Search by city/state/country name for better results.</div>
                </form>
            </div>
        </div>
    )
}

export default Header;