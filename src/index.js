import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <footer className="small">
        This was coded by Thandi M and is{" "}
        <a
          href="https://github.com/ThandiM81/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub and hosted using{" "}
        <a
          href="https://clever-gates-b5d438.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
