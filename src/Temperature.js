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
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
      </div>
      <div className="temperature">
        <div className="row">
          <div className="col-6">
            <div className="temp-now">
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
                <small className="condition-text" id="rain">
                  Precipitation: 0%
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
