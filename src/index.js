import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
