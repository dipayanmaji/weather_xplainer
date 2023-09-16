import React, { useContext, useEffect, useState } from "react";
import './Header.scss';
import logo from '../../utilities/images/logo.png';
import { MyContext } from "../CustomContext";

const Header = () => {
    const myContext = useContext(MyContext);

    const position = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let location = position.coords.latitude + "," + position.coords.longitude;
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=${location}&days=10aqi=yes&alerts=yes`)
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    myContext.setLocation(result.location);
                    myContext.setCurrentWeather(result.current);
                    myContext.setForecast(result.forecast);
                })
                .catch(err => console.log(err))
        }, err => console.log(err)
        )
    }

    const locationHandler = (e) => {
        e.preventDefault();
        const locationName = e.target.location.value;
        if (!locationName) {
            alert("Enter a valid location")
            return;
        }

        e.target.location.value = "";
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=801d79a290de48b8b1190625231509&q=${locationName}&days=10&aqi=yes&alerts=yes`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.error) {
                    alert("Enter a valid location")
                    return;
                }
                myContext.setLocation(result.location);
                myContext.setCurrentWeather(result.current);
                myContext.setForecast(result.forecast);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        position();
    }, [])

    return (
        <div className="header-container">
            <div className="header">
                <img className="logo" src={logo} alt="Weather Xplainer" />
                <form onSubmit={locationHandler}>
                    <input type="text" name="location" id="location-search" placeholder="Search For Location" autoComplete="off" />
                    <button className="search-btn"><i className="fa-solid fa-magnifying-glass-location"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Header;