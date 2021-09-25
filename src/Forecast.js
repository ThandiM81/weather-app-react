import React from "react";

import "./forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast container-fluid" id="forecast">
      <div className="row justify-content-center" id="forecast-data">
        <div className="col-2" id="daily-forecast">
          <div className="forecast-date">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="forecast-icon"
            width="80px"
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
            width="80px"
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
            width="80px"
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
            width="80px"
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
            width="80px"
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
            width="80px"
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
