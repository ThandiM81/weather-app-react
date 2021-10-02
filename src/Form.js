import axios from "axios";
import React, { useState } from "react";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "./form.css";
import "./today.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "c0e5a5c3b664f47b5456256e176f47e9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <input
                type="search"
                placeholder="Enter city...."
                id="city-entry"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col" id="find">
              <input
                type="submit"
                className="search-button"
                value="Search 🔍"
                id="search-city"
              />
              <input
                type="submit"
                className="location-button"
                value="Current 📍"
                id="location-search"
              />
            </div>
          </div>
        </form>
        <Temperature data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
