import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";

import "./form.css";
import "./today.css";

export default function Temperature(props) {
  return (
    <div>
      <div className="Cities">
        <h1>{props.data.city}</h1>
        <div className="Date">
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
        </div>
      </div>
      <div className="temperature">
        <div className="row">
          <div className="col-6">
            <div className="temp-now self-align center">
              <WeatherIcon code={props.data.icon} />
              <Conversion celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul className="conditions">
              <li className="current-condition">
                <small className="condition-text" id="current"></small>
              </li>
              <li>
                <small className="condition-text ext-capitalize" id="condition">
                  {props.data.description}
                </small>
              </li>
              <li>
                <small className="condition-text" id="humid">
                  Humidity: {props.data.humidity}%
                </small>
              </li>
              <li>
                <small className="condition-text" id="wind">
                  Wind: {props.data.wind}m/s
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
