import React, { useState, useEffect } from "react";

import DailyForecast from "./DailyForecast";
import axios from "axios";

import "./form.css";
import "./forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast container-fluid" id="forecast">
        <div className="row" id="forecast-data">
          {forecast.map(function (dayForecast, index) {
            if (index < 5) {
              return (
                <div className="col justify-content-center" key={index}>
                  <DailyForecast data={dayForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c0e5a5c3b664f47b5456256e176f47e9";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
