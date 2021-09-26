import React, { useState } from "react";
import axios from "axios";
import "./today.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday",
      description: response.data.weather[0].description,
      iconURL: "https://openweathermap.org/img/wn/04n@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="temperature">
        <div className="row">
          <div className="col-6">
            <div className="temp-now">
              <img
                src={weatherData.iconURL}
                alt={weatherData.description}
                id="iconNow"
              />
              <span className="currentTemp" id="tempDisplay">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units"> C | F </span>
            </div>
          </div>
          <div className="col-6">
            <ul className="conditions">
              <li className="current-condition">
                <small className="condition-text" id="current"></small>
              </li>
              <li>
                <small className="condition-text" id="rain">
                  Precipitation: 0%
                </small>
              </li>
              <li>
                <small className="condition-text" id="humid">
                  Humidity: {weatherData.humidity}%
                </small>
              </li>
              <li>
                <small className="condition-text" id="wind">
                  Wind: {weatherData.wind}km/h
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c0e5a5c3b664f47b5456256e176f47e9";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
