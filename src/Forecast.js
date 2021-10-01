import axios from "axios";
import React from "react";

import "./form.css";
import "./forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c0e5a5c3b664f47b5456256e176f47e9";
  let longitude = props.lon;
  let latitude = props.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-forecast container-fluid" id="forecast">
      <div className="row justify-content-center" id="forecast-data">
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="forecast-temp-max"> 24° </span>
            <span className="forecast-temp-min"> 18° </span>
          </div>
        </div>
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Tues</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="forecast-temp-max"> 24° </span>
            <span className="forecast-temp-min"> 18° </span>
          </div>
        </div>
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Wed</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="forecast-temp-max"> 24° </span>
            <span className="forecast-temp-min"> 18° </span>
          </div>
        </div>
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="forecast-temp-max"> 24° </span>
            <span className="forecast-temp-min"> 18° </span>
          </div>
        </div>
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Fri</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="forecast-temp-max"> 24° </span>
            <span className="forecast-temp-min"> 18° </span>
          </div>
        </div>
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Sat</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="forecast-temp-max"> 24° </span>
            <span className="forecast-temp-min"> 18° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
