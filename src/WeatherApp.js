import React from "react";
import Form from "./Form";

import "./weather.css";

export default function WeatherApp() {
  return (
    <div className="container container-fluid">
      <div className="weather-app">
        <div className="weather-app-wrapper">
          <Form defaultCity="San Francisco" />
        </div>
      </div>
    </div>
  );
}
