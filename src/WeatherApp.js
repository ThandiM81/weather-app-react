import React from "react";
import Form from "./Form";
import Forecast from "./Forecast";

import "./weather.css";

export default function WeatherApp() {
  return (
    <div className="container container-fluid">
      <div className="weather-app">
        <div className="weather-app-wrapper">
          <Form defaultCity="New York" />
          <Forecast />
        </div>
      </div>
      <footer className="small">
        This was coded by Thandi M and is{" "}
        <a href="https://github.com/ThandiM81/weather-app-react">
          open-sourced
        </a>{" "}
        on GitHub and hosted using{" "}
        <a href="https://clever-gates-b5d438.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
