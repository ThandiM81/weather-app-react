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
          <div className="row" id="city-form">
            <div className="col-9">
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
            <div className="col-3" id="find">
              <input
                type="submit"
                className="btn btn-primary"
                value="Search 🔍"
                id="search-city"
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
