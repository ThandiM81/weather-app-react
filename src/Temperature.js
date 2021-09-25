import React from "react";
import "./today.css";

export default function Temperature() {
  return (
    <div className="temperature">
      <div className="row">
        <div className="col-6">
          <div className="temp-now">
            <img
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt="weather icon today"
              id="iconNow"
            />
            <span className="currentTemp" id="tempDisplay">
              {" "}
            </span>
            <span className="units">
              19° <a href="#">C </a> | <a href="#"> F </a>{" "}
            </span>
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
                Humidity: 16%
              </small>
            </li>
            <li>
              <small className="condition-text" id="wind">
                Wind: 10km/h
              </small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
