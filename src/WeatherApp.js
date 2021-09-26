import React from "react";
import Form from "./Form";
import Cities from "./Cities";
import Today from "./Today";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "./weather.css";

export default function WeatherApp() {
  return (
    <div className="container container-fluid">
      <div className="weather-app">
        <div className="weather-app-wrapper">
          <Form />
          <Cities />
          <Today />
          <Temperature defaultCity="New York" />
          <Forecast />
        </div>
      </div>
      <footer className="small">
        <a href="https://github.com/ThandiM81/weather-app-react">
          Open-source code
        </a>{" "}
        by Thandi M
      </footer>
    </div>
  );
}
